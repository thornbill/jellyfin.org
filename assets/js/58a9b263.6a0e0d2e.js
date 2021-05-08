(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[2349],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2598:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return s},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),l={title:"Packaging Updates for 10.6.0",author:"Joshua Boniface",author_url:"https://github.com/joshuaboniface",author_image_url:"https://avatars.githubusercontent.com/u/4031396?v=4",tags:["packaging","server"],description:"Some backend packaging changes are here: what you should know"},r={permalink:"/blog/2020/06/21/packaging-updates",source:"@site/blog/2020-06-21-packaging-updates.md",title:"Packaging Updates for 10.6.0",description:"Some backend packaging changes are here: what you should know",date:"2020-06-21T00:00:00.000Z",formattedDate:"June 21, 2020",tags:[{label:"packaging",permalink:"/blog/tags/packaging"},{label:"server",permalink:"/blog/tags/server"}],readingTime:8.33,truncated:!0,prevItem:{title:"Plugin Repositories",permalink:"/blog/2020/07/17/plugin-updates"},nextItem:{title:"Client Spotlight: Infuse for tvOS and iOS",permalink:"/blog/2020/05/12/client-spotlight-infuse"}},s=[{value:"Split Builds",id:"split-builds",children:[]},{value:"Azure Pipelines builds",id:"azure-pipelines-builds",children:[]},{value:"Metapackages and Metaimages",id:"metapackages-and-metaimages",children:[]},{value:"Unstable builds",id:"unstable-builds",children:[]},{value:"Using Unstable builds",id:"using-unstable-builds",children:[]},{value:"Conclusions",id:"conclusions",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Packaging and building binaries for releases and testing has long been an issue for us. From fighting with duct-tape-and-coat-hanger scripts, to testing breaking changes, to massaging official releases, how we were doing things for the last year-and-a-half needed some improvements."),(0,o.kt)("p",null,"Luckily, today they are all completed. In this post, I'll detail the changes as well as what the entail for our users."),(0,o.kt)("p",null,"For a brief TL;DR: for most users of our stable releases, not much will change, and you will upgrade to 10.6.0 as you always have. For anyone using nightlies for testing, advanced setups, or who are just curious - read on!"),(0,o.kt)("h3",{id:"split-builds"},"Split Builds"),(0,o.kt)("p",null,"The first main component of the packaging changes is split builds. Previously, we were relying on some serious hackery in order to build both the Web UI (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfin/jellyfin-web"},"https://github.com/jellyfin/jellyfin-web"),") and Server (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfin/jellyfin"},"https://github.com/jellyfin/jellyfin"),") and combine them into one package. Ultimately, with the sheer number of changes in both repositories and speed at which updates happen, along with our eventual goal to decouple the two from each other for releases, this sort of solution had reached its limits. This is perhaps best exemplified by the mostly-unseen work I had to do to get 10.5.4 and 10.5.5 to build at all."),(0,o.kt)("p",null,"With split packages, the two repositories are now built completely independently for all platforms. If you build the ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-web")," repository, you get out a Docker image, ",(0,o.kt)("inlineCode",{parentName:"p"},".deb")," packages, ",(0,o.kt)("inlineCode",{parentName:"p"},".rpm")," packages, or a ",(0,o.kt)("inlineCode",{parentName:"p"},".tar.gz")," archive that just contains the Web UI. Similarly, if you build the ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," repository, you get out the various Docker, ",(0,o.kt)("inlineCode",{parentName:"p"},".deb"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".rpm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".tar.gz"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," archives you know and love."),(0,o.kt)("p",null,"The main difference is the naming - the ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-web")," repository binaries are named, well, ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-web"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," repository binaries are named ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-server"),". So, to use Debian as an example, where there was once ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin"),", there is now ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-server"),". But don't worry, ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," is not gone - we'll get to that shortly."),(0,o.kt)("h3",{id:"azure-pipelines-builds"},"Azure Pipelines builds"),(0,o.kt)("p",null,"Our previous build infrastructure consisted of a veritable spaghetti factory of Bash, Python, and Docker scripts that were executed on our build server, a DigitalOcean droplet. For the most part, it worked, but the process was very fragile, opaque (I'm not even sure ",(0,o.kt)("em",{parentName:"p"},"I")," understand how it all worked all the time, and I wrote it all!), and resource-intensive."),(0,o.kt)("p",null,"As we've moved more and more functions to Azure for testing, verification, linting, etc. in the various repositories, it became obvious that Azure Pipelines had a lot of flexibility, and would be able to perform nearly all of our build steps for us. This eliminated at least 2/3 of the build server, and gives us another cool option - unstable builds, which I'll touch on shortly."),(0,o.kt)("p",null,"The Azure Pipelines build handles the actual building of all the archives for both repositories mentioned in the previous section, uploads the binary artifacts to the build server, and then kicks off a single script to handle the last 1/3 of the process, making things much clearer, more obvious, and with results visible to everyone in our Azure project page."),(0,o.kt)("h3",{id:"metapackages-and-metaimages"},"Metapackages and Metaimages"),(0,o.kt)("p",null,"I previously mentioned that the package which used to be called ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," is now called ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-server"),", and does not contain the Web UI. So, how do you get it all? And how will upgrades be seamless? The answer is metapackages, metaarchives, and metaimages! These new components can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfin/jellyfin-metapackages"},"this repository page"),", specifically the Docker images which will now be the source of truth for those configurations. I'll outline how each platform behaves below."),(0,o.kt)("p",null,"For Docker, the Azure pipelines split builds create docker images called ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin/jellyfin-server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin/jellyfin-web"),". On their own they're not too useful, but exist to enable the next step. When an Azure build finishes and has uploaded these images, a script is kicked off on our build server which builds the ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin/jellyfin"),' "metaimage", which will take the two separate images, and combine them into a single Docker image along with all the components to run them, like ',(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-ffmpeg"),", then push the resulting image. The end result is a single image, ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin/jellyfin"),", like there has always been, but the builds are done independently rather than relying on ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone"),"/archive downloads inside the build steps and other shenanigans."),(0,o.kt)("p",null,"For Debian and Ubuntu, the Azure pipelines split builds create separate ",(0,o.kt)("inlineCode",{parentName:"p"},".deb")," packages for each component. Unlike Docker, these are fully usable on their own, and installing Jellyfin in 10.6.0+ can be done with ",(0,o.kt)("inlineCode",{parentName:"p"},"apt install jellyfin-server jellyfin-web")," if one wishes. The metapackage is a separate ",(0,o.kt)("inlineCode",{parentName:"p"},".deb"),", called ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin"),", who's only function is to have dependencies on these two component packages. Thus, installing ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," will automatically install ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-web"),", along with the other required dependencies from each. This is how upgrades will be seamless from previous versions: upgrading from the old ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," to the new ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin")," will automatically pull in the two new subpackages and remove the old one, with no interruptions."),(0,o.kt)("p",null,"For Fedora and CentOS, the setup is similar to Debian/Ubuntu, with the only difference being the metapackage is a component of the ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-server"),' repository and is thus only rebuilt when that repository is. However, since we do not provide a "proper" repository for these packages like we do for Debian/Ubuntu, the impact should be quite low, and will be nonexistent for stable releases.'),(0,o.kt)("p",null,"For Windows installers and MacOS ",(0,o.kt)("inlineCode",{parentName:"p"},".app")," packages, the process remains a little more complicated and a WIP, but those will continue to work on release."),(0,o.kt)("p",null,"For the remaining platforms, including the archive packages for Windows, MacOS, Linux, and .NET portable, the process takes the two separate ",(0,o.kt)("inlineCode",{parentName:"p"},".tar.gz")," / ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," archives from the build process, and combines them into a single ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin"),' archive of the same type, which puts the two component parts in their respective places. Thus, like all the others mentioned above, the change should be invisible to users by downloading the "combined" version of the archives.'),(0,o.kt)("h3",{id:"unstable-builds"},"Unstable builds"),(0,o.kt)("p",null,'One of the cool things that this new setup enables is "unstable" builds. For quite a while now, we\'ve been providing (when not broken) "nightly" builds, which as their name implies are build every night if there were merged PRs from the previous day. However, these had a number of drawbacks. First, they broke a lot; second, on a busy day it would be possible for there to be up to a dozen separate PRs that made up the nightly changeset; third, they could often be totally messed up in terms of contents, for instance if the unsplit build grabbed the wrong version of Web.'),(0,o.kt)("p",null,'The new split builds, Azure builds, and metapackages/metaimages instead let us do something far superior: build "unstable" releases for ',(0,o.kt)("em",{parentName:"p"},"every merged PR"),". We don't have to worry about resource usage (Azure provides this), disk space, or other aspects of the build process. We can know immediately if something breaks. And most importantly, it lets anyone test our master branch in a very clear way, knowing ",(0,o.kt)("em",{parentName:"p"},"exactly")," what version of the repository you are using and what the last merged PR was if something goes wrong."),(0,o.kt)("p",null,'Unstable builds are versioned based on the Azure build ID, which is in the format "',"[date]",".","[id]",'", for example "20200620.12" for the 12th build on June 20th 2020. Thus this version string will tell you exactly which Azure build generated the binary, and thus which PR in which repository triggered it. For those binaries with changelogs (',(0,o.kt)("inlineCode",{parentName:"p"},".deb")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".rpm")," packages only for now), the changelog data includes the PR ID explicitly as well."),(0,o.kt)("h3",{id:"using-unstable-builds"},"Using Unstable builds"),(0,o.kt)("p",null,"Using unstable builds is a bit different than the previous nightlies. For those, the packages/images were named ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-nightly")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin:nightly")," (for Docker) and were stored in the same repositories. This has now changed somewhat, and I'll detail the changes to each platform below. Note that, at least until 10.6.0 is released, we will continue to build ",(0,o.kt)("inlineCode",{parentName:"p"},"nightly")," images as we always have, after which they will be turned off in favour of ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable")," builds exclusively, so if you like to live on the bleeding edge, please review this section in detail and make the required changes as soon as you can."),(0,o.kt)("p",null,"For Docker, the new unstable builds are available with the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable")," tag, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin/jellyfin:unstable"),", or at a specific version tag, for instance ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin/jellyfin:20200620.12-unstable"),". Following the main ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable")," tag will ensure you can always grab the latest unstable build, while the versioned tags allow you to pull specific builds for testing or debugging."),(0,o.kt)("p",null,"For Debian and Ubuntu, where the unstable images are stored has changed. As mentioned, previously they were part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," section of the repository with the alternate name ",(0,o.kt)("inlineCode",{parentName:"p"},"jellyfin-nightly"),', and this is no longer the case for unstable. Instead, a separate repository "component" called ',(0,o.kt)("inlineCode",{parentName:"p"},"unstable")," has been created to house the unstable builds, and they are not renamed. To enable this extra component, add a line to your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list.d/jellyfin.list")," like the following, which is identical to the existing line except with ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," replaced by ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"deb [arch=amd64] https://repo.jellyfin.org/debian buster unstable"),". Because of how the versioning works, once you enable this additional source, you will always get the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable"),' packages with their "very high" version numbers over the stable releases, so to disable unstable builds, you must remove this extra line, run ',(0,o.kt)("inlineCode",{parentName:"p"},"apt update"),", remove the old package(s), then install the stable version."),(0,o.kt)("p",null,"For all other releases, since the source was always files downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://repo.jellyfin.org/releases"},"our repository site"),", not much will change - instead of downloading files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"nightly/")," folder of your platform, download from the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable/")," folder. Note that these folders will, because of the split builds, contain separate subfolders for ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"combined"),"; generally you will want ",(0,o.kt)("inlineCode",{parentName:"p"},"combined"),". You can then use these archives as you always have."),(0,o.kt)("h3",{id:"conclusions"},"Conclusions"),(0,o.kt)("p",null,"Thank you for reading this description of our build changes. We continue to test these extensively to work out any bugs, but if you have questions or feedback, please drop us a message on Matrix!"),(0,o.kt)("p",null,"We hope to see you very soon for 10.6.0, and many future releases with this new format!"))}u.isMDXComponent=!0}}]);