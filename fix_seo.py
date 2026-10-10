import os, json, re, html
ROOT='/mnt/data/seo_per_page2'
PAGES=os.path.join(ROOT,'src/pages')
r=json.load(open('/tmp/routes.json'))
meta={}

def add(rel, title, desc, path, kind, parent=None, keywords=None, noindex=True):
    meta[rel]={'title':title,'description':desc,'canonical':path,'noindex':noindex,'pageType':kind,'parent':parent,'keywords':keywords or []}

# Home
add('Home/Home.jsx','CollegeShine | Colleges, Courses, Admissions & Scholarships','Explore colleges, courses, admissions, entrance exams, counselling, scholarships and education tools with CollegeShine.','/','home',keywords=['CollegeShine','colleges','courses','admissions','scholarships','education platform'],noindex=False)
# top pages
TOP={
 'About/About.jsx':('About CollegeShine | Education & College Discovery Platform','Learn about CollegeShine, an education platform for exploring colleges, courses, admissions, scholarships and career opportunities.','/about/','webpage',['CollegeShine about','education platform','college discovery']),
 'Contact/Contact.jsx':('Contact CollegeShine | Education & Admission Support','Contact CollegeShine for questions about colleges, courses, admissions, scholarships, counselling and education services.','/contact/','webpage',['contact CollegeShine','education support','admission help']),
 'Career/Career.jsx':('Careers at CollegeShine | Join Our Team','Explore career opportunities with CollegeShine and learn how you can contribute to an education and college discovery platform.','/career/','webpage',['CollegeShine careers','education jobs','career opportunities']),
 'Advertisement/Advertisement.jsx':('Advertise With CollegeShine | Education Advertising','Learn about advertising opportunities with CollegeShine for education-focused brands, institutions and services.','/advertisement/','webpage',['advertise with CollegeShine','education advertising','college advertising']),
 'PartnerWithUs/PartnerWithUs.jsx':('Partner With CollegeShine | Education Partnerships','Explore partnership opportunities with CollegeShine for colleges, institutions, education providers and related organizations.','/partner-with-us/','webpage',['CollegeShine partner','education partnerships','college partnership']),
 'Legal/PrivacyPolicy/PrivacyPolicy.jsx':('Privacy Policy | CollegeShine','Read the CollegeShine privacy policy covering website use, information handling and privacy practices.','/privacy-policy/','webpage',['CollegeShine privacy policy','privacy']),
 'Legal/TermsAndConditions/TermsAndConditions.jsx':('Terms & Conditions | CollegeShine','Read the terms and conditions governing use of the CollegeShine website and its education resources.','/terms-and-conditions/','webpage',['CollegeShine terms','terms and conditions']),
 'Legal/Sitemap/Sitemap.jsx':('HTML Sitemap | CollegeShine','Browse the CollegeShine HTML sitemap to discover the main sections and pages of the website.','/sitemap/','webpage',['CollegeShine sitemap','HTML sitemap','website pages']),
 'Blog/Blog.jsx':('CollegeShine Blog | Education, Admissions & Career Insights','Read CollegeShine articles covering education, admissions, courses, scholarships, entrance exams and career guidance.','/blog/','collection',['education blog','college admissions blog','career guidance'],),
}
for rel,(t,d,p,k,kw,*_) in TOP.items(): add(rel,t,d,p,k,keywords=kw)
# hubs
HUBS={
 'Courses/Courses.jsx':('Courses | Degree, Diploma & Professional Courses','Explore courses by category, including engineering, medicine, arts and science, management, diploma and other study options.','/course/','collection',['courses','degree courses','professional courses','courses after 12th']),
 'EntranceExams/EntranceExams.jsx':('Entrance Exams | Eligibility, Dates & Admission Guidance','Explore entrance exams, eligibility, admission information and preparation resources for higher education.','/entrance-exam/','collection',['entrance exams','entrance exam eligibility','admission exams']),
 'Counselling/Counselling.jsx':('College Counselling | Admission Guidance','Explore college counselling information for engineering, medical, law, management, agriculture and other admissions.','/counselling/','collection',['college counselling','admission counselling','Tamil Nadu counselling']),
 'Scholarships/Scholarships.jsx':('Scholarships | Student Financial Aid & Eligibility','Explore scholarships and financial-aid opportunities for students, including government, merit and category-based schemes.','/scholarship/','collection',['scholarships','student scholarships','government scholarships','education financial aid']),
 'Services/Services.jsx':('Education Services | Admissions, Guidance & Study Abroad','Explore CollegeShine education services covering admissions, online and distance education and study abroad guidance.','/services/','collection',['education services','college admission services','study abroad guidance']),
 'Tools/Tools.jsx':('Education Tools | College, Career & Scholarship Tools','Use CollegeShine education tools for college discovery, career planning, scholarships, cutoffs and admission support.','/tools/','collection',['education tools','college finder','career tool','scholarship finder']),
}
for rel,(t,d,p,k,kw) in HUBS.items(): add(rel,t,d,p,k,keywords=kw)
# course category and detail
for x in r['categories']:
    rel=x['component'].replace('./pages/','')
    label=x['label']
    add(rel,f'{label} Courses | Colleges, Eligibility & Admissions',f'Explore {label} courses, study options, eligibility and admission information on CollegeShine.',x['path'],'collection',parent={'name':'Courses','url':'/course/'},keywords=[f'{label} courses',f'{label} courses in India',f'{label} course eligibility','college admissions'])
for x in r['courses']:
    rel=x['component'].replace('./pages/','')
    cat=x.get('categoryLabel','Courses')
    name=x['name']
    add(rel,f'{name} | Course Details, Eligibility & Colleges',f'Explore {name} course details, eligibility, duration, admissions and related colleges on CollegeShine.',x['path'],'course',parent={'name':cat+' Courses','url':f"/course/{x['category']}/"},keywords=[name,f'{name} course',f'{name} eligibility',f'{name} colleges'])
# section hubs and children
for s in r['sections']:
    rel=f"{s['key']}/{s['key']}.jsx"
    base=s['title']
    if s['key']=='EntranceExams': t=f'{base} | Eligibility, Dates & Admission Guidance'; d='Explore entrance exams, eligibility, dates, application information and admission guidance on CollegeShine.'; kw=['entrance exams','entrance exam eligibility','entrance exam dates']
    elif s['key']=='Scholarships': t=f'{base} | Eligibility, Benefits & Application'; d='Explore scholarships, eligibility, benefits and application information for students on CollegeShine.'; kw=['scholarships','scholarship eligibility','student financial aid']
    elif s['key']=='Counselling': t=f'{base} | College Admission Guidance'; d='Explore college counselling information, admission processes and guidance on CollegeShine.'; kw=['college counselling','admission counselling','college admission guidance']
    else: t=f'{base} | CollegeShine'; d=f'Explore CollegeShine {base.lower()} and education support options.'; kw=[base.lower(),'education services']
    add(rel,t,d,s['path'],'collection',keywords=kw)
    for x in s['links']:
        rel=f"{s['key']}/{x['component']}/{x['component']}.jsx"
        label=x['label']
        if s['key']=='EntranceExams': title=f'{label} | Exam Details, Eligibility & Admission'; desc=f'Explore {label} exam details, eligibility, admission information and preparation guidance on CollegeShine.'; kw=[label,f'{label} exam',f'{label} eligibility','entrance exam']
        elif s['key']=='Scholarships': title=f'{label} | Eligibility, Benefits & Application'; desc=f'Explore {label} eligibility, benefits, application information and student scholarship guidance on CollegeShine.'; kw=[label,f'{label} scholarship','scholarship eligibility','student scholarship']
        elif s['key']=='Counselling': title=f'{label} | Dates, Process & Admission Guidance'; desc=f'Explore {label} dates, process, eligibility and college admission counselling information on CollegeShine.'; kw=[label,f'{label} counselling','admission counselling','college admission']
        else: title=f'{label} | CollegeShine'; desc=f'Explore CollegeShine {label.lower()} and related education guidance.'; kw=[label,'education service','admission guidance']
        add(rel,title,desc,x['path'],'service' if s['key']=='Services' else 'webpage',parent={'name':s['title'],'url':s['path']},keywords=kw)
# abroad
ab=r['abroad']
add('Services/AbroadAdmission/AbroadAdmission.jsx','Study Abroad Admission | CollegeShine','Explore study abroad admission guidance, country options, application support and international education information with CollegeShine.',ab['path'],'service',parent={'name':'Services','url':'/services/'},keywords=['study abroad','abroad admission','study abroad guidance','international education'])
for x in ab['links']:
    rel=f"Services/AbroadAdmission/{x['component']}/{x['component']}.jsx"
    lab=x['label']
    add(rel,f'Study in {lab} for Indian Students | Admission Guide',f'Explore study in {lab} for Indian students, university admission, eligibility, courses, scholarships and study abroad guidance.',x['path'],'service',parent={'name':'Abroad Admission','url':'/services/abroad-admission/'},keywords=[f'study in {lab}',f'study in {lab} for Indian students',f'{lab} university admission','study abroad'])
# college generic dynamic
add('Colleges/College.jsx','Colleges | Find Colleges by Course & Location','Explore colleges by course, category and location on CollegeShine, with admission and education information.', '/colleges/','collection',keywords=['colleges','college search','colleges in India','college admissions'])
# Ensure any missing non-component page has fallback based on path
# Write metadata JSON for audit/debug
os.makedirs(os.path.join(ROOT,'src/data/seo'),exist_ok=True)
with open(os.path.join(ROOT,'src/data/seo/pageSeo.json'),'w') as f: json.dump(meta,f,indent=2)

# Modify PageShell to be presentational only
ps=os.path.join(ROOT,'src/components/PageShell/PageShell.jsx')
open(ps,'w').write("""import Navbar from '../Navbar/Navbar'\nimport Footer from '../Footer/Footer'\nimport './PageShell.css'\n\nexport default function PageShell({ title, path, section }) {\n  return (\n    <>\n      <Navbar />\n      <main className=\"page-shell\" data-route={path} aria-labelledby=\"page-shell-title\">\n        {section && <span className=\"page-shell__section\">{section}</span>}\n        <h1 id=\"page-shell-title\" className=\"seo-placeholder-title\">{title}</h1>\n      </main>\n      <Footer />\n    </>\n  )\n}\n""")

# SEO component
seojsx=os.path.join(ROOT,'src/components/SEO/SEO.jsx')
open(seojsx,'w').write("""import { useEffect } from 'react'\nimport { setSEO } from '../../lib/seo'\n\nexport default function SEO({\n  title,\n  description = '',\n  canonical,\n  noindex = true,\n  pageType = 'webpage',\n  breadcrumbs = [],\n  keywords = [],\n  searchIntent = 'informational',\n  localTerms = [],\n  image,\n}) {\n  useEffect(() => {\n    setSEO({\n      title,\n      description,\n      canonical,\n      noindex,\n      pageType,\n      breadcrumbs,\n      image,\n    })\n  }, [title, description, canonical, noindex, pageType, JSON.stringify(breadcrumbs), JSON.stringify(keywords), searchIntent, JSON.stringify(localTerms), image])\n\n  return null\n}\n""")

# setSEO accepts richer pageType but does not emit meta keywords (not used by Google); keep data in JSX for content planning.
# Rewrite App: remove global SEO import and wrapper.
app=os.path.join(ROOT,'src/App.jsx'); s=open(app).read()
s=s.replace("import SEO from './components/SEO/SEO'\n",'')
s=s.replace("  const seo=<SEO route={route} />\n",'')
s=s.replace("return <>{seo}<Home /></>","return <Home />")
s=s.replace("return <>{seo}<Component /></>","return <Component />")
s=s.replace("return <>{seo}<Courses /></>","return <Courses />")
s=s.replace("return <>{seo}<AbroadAdmission /></>","return <AbroadAdmission />")
s=s.replace("return Component ? <>{seo}<Component /></> : <NotFound />","return Component ? <Component /> : <NotFound />")
s=s.replace("return <>{seo}<College title=\"Colleges\" path=\"/colleges/\" hub /></>","return <College title=\"Colleges\" path=\"/colleges/\" hub />")
s=s.replace("return <>{seo}<College title={route.college.label} path={route.college.path} /></>","return <College title={route.college.label} path={route.college.path} />")
s=s.replace("return Component ? <>{seo}<Component /></> : <NotFound />","return Component ? <Component /> : <NotFound />")
# may have remaining seo wrappers in section/category; remove all exact forms
s=s.replace("return Component ? <>{seo}<Component /></> : <NotFound />","return Component ? <Component /> : <NotFound />")
open(app,'w').write(s)

# Build import + JSX string helper

def esc(s): return s.replace('\\','\\\\').replace("'","\\'")
def jsarr(a): return '['+', '.join("'"+esc(x)+"'" for x in a)+']'
def seo_block(m, rel):
    depth=rel.count('/')-1
    # relative import from page file directory to components/SEO/SEO
    # page dir e.g. Courses/Engineering -> ../../.. from src/pages/... to src/components
    page_dir=os.path.dirname(rel)
    target=os.path.join(ROOT,'src/components/SEO/SEO.jsx')
    file_path=os.path.join(PAGES,rel)
    relimp=os.path.relpath(target,os.path.dirname(file_path)).replace(os.sep,'/')
    if not relimp.startswith('.'): relimp='./'+relimp
    parent=m.get('parent')
    breadcrumbs=[{'name':'Home','url':'/'}]
    if parent: breadcrumbs.append(parent)
    if m['canonical']!='/' : breadcrumbs.append({'name':m['title'].split(' | ')[0],'url':m['canonical']})
    # home title crumb is already home
    if m['canonical']=='/': breadcrumbs=[{'name':'Home','url':'/'}]
    lines=[f"import SEO from '{relimp}'"]
    lines.append('')
    lines.append('<SEO')
    lines.append(f"  title=\"{html.escape(m['title'], quote=True)}\"")
    lines.append(f"  description=\"{html.escape(m['description'], quote=True)}\"")
    lines.append(f"  canonical=\"{m['canonical']}\"")
    lines.append(f"  noindex={str(m['noindex']).lower()}")
    lines.append(f"  pageType=\"{m['pageType']}\"")
    lines.append(f"  searchIntent=\"informational\"")
    lines.append(f"  keywords={{{jsarr(m['keywords'])}}}")
    lines.append(f"  breadcrumbs={{{json.dumps(breadcrumbs, ensure_ascii=False)}}}")
    lines.append('/>')
    return '\n'.join(lines), relimp, breadcrumbs

# Modify pages according to metadata. Components/PageComponents excluded.
processed=0; missing=[]
for rel,m in meta.items():
    path=os.path.join(PAGES,rel)
    if not os.path.isfile(path):
        missing.append(rel); continue
    s=open(path,encoding='utf-8').read()
    block,relimp,bcs=seo_block(m,rel)
    # remove old setSEO imports
    s=re.sub(r"^import \{ setSEO \} from ['\"].*?['\"]\n",'',s,flags=re.M)
    # remove useEffect import if it was only for old SEO; we'll selectively remove after cleanup
    # remove single-line SEO-only effect
    s=re.sub(r"\n?\s*useEffect\(\(\)=>setSEO\(\{.*?\}\),\[\]\);?",'\n',s,flags=re.S)
    # remove multiline SEO-only effect blocks containing setSEO, non-greedy up to dependency close
    s=re.sub(r"\n?\s*useEffect\(\(\)\s*=>\s*\{\s*setSEO\(\{.*?\}\)\s*\}\s*,\s*\[.*?\]\s*\)\s*",'\n',s,flags=re.S)
    # Home had setSEO inside a larger effect: remove its block only
    s=re.sub(r"\n\s*setSEO\(\{.*?\}\)\n",'\n',s,flags=re.S)
    # remove PageShell SEO behavior already done; inject into PageShell return or Navbar
    # Add import after existing imports: put immediately after last import line for deterministic build.
    import_lines=[]
    # avoid duplicate SEO import
    s=re.sub(r"^import SEO from .*?\n",'',s,flags=re.M)
    lines=s.splitlines()
    idx=0
    while idx < len(lines) and (lines[idx].startswith('import ') or lines[idx].strip()==''):
        idx+=1
    # insert after all import lines but before first non-import; simple find last import index
    last=-1
    for i,line in enumerate(lines):
        if line.startswith('import '): last=i
    lines.insert(last+1,block.splitlines()[0])
    # block includes blank and JSX; only import line should be inserted; JSX handled below
    s='\n'.join(lines)+'\n'
    jsx='\n'.join(block.splitlines()[2:])
    # PageShell returns: replace return <PageShell ... /> (possibly multiline) with wrapped version
    if '<PageShell' in s:
        match=re.search(r"return\s+<PageShell[\s\S]*?/>",s)
        if match:
            old=match.group(0)
            new="return (<>\n      "+jsx.replace('\n','\n      ')+"\n      "+old.replace('return ','')+"\n    </>)"
            s=s[:match.start()]+new+s[match.end():]
        else:
            missing.append('PageShell:'+rel); continue
    elif '<Navbar' in s:
        # insert SEO before first Navbar tag
        s=s.replace('<Navbar',jsx+'\n      <Navbar',1)
    else:
        missing.append('No target:'+rel); continue
    # clean unused useEffect import if no useEffect remains in file
    if 'useEffect' not in s:
        s=re.sub(r"import \{ useEffect \} from 'react'\n",'',s)
    # clean unused setSEO import if somehow remains
    s=re.sub(r"import \{ setSEO \} from .*\n",'',s)
    open(path,'w',encoding='utf-8').write(s)
    processed+=1

# Special dynamic College component: replace any injected static SEO block with dynamic props
college=os.path.join(PAGES,'Colleges/College.jsx')
s=open(college,encoding='utf-8').read()
# remove static SEO block lines if present
s=re.sub(r"\n\s*<SEO[\s\S]*?\n\s*/>\n",'\n',s,count=1)
# ensure SEO import exists
if "components/SEO/SEO" not in s:
    s=s.replace("import Footer from '../../components/Footer/Footer'", "import Footer from '../../components/Footer/Footer'\nimport SEO from '../../components/SEO/SEO'")
# remove old SEO effect if any
s=re.sub(r"\n\s*useEffect\([\s\S]*?\n\s*\}, \[title, path, hub\]\)\n",'\n',s,count=1)
s=s.replace("import { useEffect } from 'react'\n",'')
# inject dynamic SEO before Navbar
if '<SEO' not in s:
    dynamic="""<SEO\n        title={`${title} | Colleges & Admission Information | CollegeShine`}\n        description={`Explore ${title}, college information, courses, admissions and related education opportunities on CollegeShine.`}\n        canonical={path}\n        noindex={true}\n        pageType=\"collection\"\n        searchIntent=\"informational\"\n        keywords={[title, `${title} colleges`, 'college admission', 'colleges in India']}\n        breadcrumbs={[\n          { name: 'Home', url: '/' },\n          ...(hub ? [] : [{ name: 'Colleges', url: '/colleges/' }]),\n          { name: title, url: path },\n        ]}\n      />"""
    s=s.replace('<Navbar />',dynamic+'\n      <Navbar />',1)
open(college,'w',encoding='utf-8').write(s)

# Home cleanup: ensure useEffect retained for scripts but no duplicate SEO. Our generic injection already added.
# Remove unused setSEO imports globally and route-based SEO component content handled above.
for dp,_,fs in os.walk(PAGES):
 for f in fs:
  if f.endswith('.jsx') and f!='PageComponents.jsx':
   p=os.path.join(dp,f); x=open(p,encoding='utf-8').read(); x=re.sub(r"^import \{ setSEO \} from .*\n",'',x,flags=re.M); open(p,'w',encoding='utf-8').write(x)

print('processed',processed,'missing',missing)
print('meta pages',len(meta))
