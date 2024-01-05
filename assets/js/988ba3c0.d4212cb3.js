"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(3117),i=(n(7294),n(3905));const r={title:"All About Agent Descriptions",authors:["afourney"],tags:["AutoGen"]},a=void 0,s={permalink:"/autogen/blog/2023/12/29/AgentDescriptions",source:"@site/blog/2023-12-29-AgentDescriptions/index.mdx",title:"All About Agent Descriptions",description:"TLDR",date:"2023-12-29T00:00:00.000Z",formattedDate:"December 29, 2023",tags:[{label:"AutoGen",permalink:"/autogen/blog/tags/auto-gen"}],readingTime:8.555,truncated:!1,authors:[{name:"Adam Fourney",title:"Principal Researcher Microsoft Research",url:"https://www.adamfourney.com",imageURL:"https://github.com/afourney.png",key:"afourney"}],nextItem:{title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",permalink:"/autogen/blog/2023/12/23/AgentOptimizer"}},l={authorsImageUrls:[void 0]},u=[{value:"TLDR",id:"tldr",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"An Experiment with Distraction",id:"an-experiment-with-distraction",children:[{value:"With versions prior to 0.2.2, using <code>system_message</code>:",id:"with-versions-prior-to-022-using-system_message",children:[],level:4},{value:"With version 0.2.2, using <code>description</code>:",id:"with-version-022-using-description",children:[],level:4}],level:2},{value:"Tips for Writing Good Descriptions",id:"tips-for-writing-good-descriptions",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tldr"},"TLDR"),(0,i.kt)("p",null,"AutoGen 0.2.2 introduces a ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#__init__"},"description")," field to ConversableAgent (and all subclasses), and changes GroupChat so that it uses agent ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),"s rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message"),"s when choosing which agents should speak next."),(0,i.kt)("p",null,"This is expected to simplify GroupChat\u2019s job, improve orchestration, and make it easier to implement new GroupChat or GroupChat-like alternatives."),(0,i.kt)("p",null,"If you are a developer, and things were already working well for you, no action is needed -- backward compatibility is ensured because the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field defaults to the ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message")," when no description is provided."),(0,i.kt)("p",null,"However, if you were struggling with getting GroupChat to work, you can now try updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"As AutoGen matures and developers build increasingly complex combinations of agents, orchestration is becoming an important capability. At present, ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/groupchat#groupchat-objects"},"GroupChat")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/groupchat#groupchatmanager-objects"},"GroupChatManager")," are the main built-in tools for orchestrating conversations between 3 or more agents. For orchestrators like GroupChat to work well, they need to know something about each agent so that they can decide who should speak and when. Prior to AutoGen 0.2.2, GroupChat relied on each agent's ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," to learn about each participating agent. This is likely fine when the system prompt is short and sweet, but can lead to problems when the instructions are very long (e.g., with the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/assistant_agent"},"AssistantAgent"),"), or non-existent (e.g., with the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/user_proxy_agent"},"UserProxyAgent"),")."),(0,i.kt)("p",null,"AutoGen 0.2.2 introduces a ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#__init__"},"description")," field to all agents, and replaces the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message")," for orchestration in GroupChat and all future orchestrators. The ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field defaults to the ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message")," to ensure backwards compatibility, so you may not need to change anything with your code if things are working well for you. However, if you were struggling with GroupChat, give setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field a try."),(0,i.kt)("p",null,"The remainder of this post provides an example of how using the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field simplifies GroupChat's job,  provides some evidence of its effectiveness, and provides tips for writing good descriptions."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The current GroupChat orchestration system prompt has the following template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are in a role play game. The following roles are available:\n\n{self._participant_roles(agents)}.\n\nRead the following conversation.\nThen select the next role from {[agent.name for agent in agents]} to play. Only return the role.\n")),(0,i.kt)("p",null,"Suppose that you wanted to include 3 agents: A UserProxyAgent, an AssistantAgent, and perhaps a GuardrailsAgent."),(0,i.kt)("p",null,"Prior to 0.2.2, this template would expand to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are in a role play game. The following roles are available:\n\nassistant: You are a helpful AI assistant.\nSolve tasks using your coding and language skills.\nIn the following cases, suggest python code (in a python coding block) or shell script (in a sh coding block) for the user to execute.\n1. When you need to collect info, use the code to output the info you need, for example, browse or search the web, download/read a file, print the content of a webpage or a file, get the current date/time, check the operating system. After sufficient info is printed and the task is ready to be solved based on your language skill, you can solve the task by yourself.\n2. When you need to perform some task with code, use the code to perform the task and output the result. Finish the task smartly.\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can't modify your code. So do not suggest incomplete code which requires users to modify. Don't use a code block if it's not intended to be executed by the user.\nIf you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line. Don't include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use 'print' function for the output when relevant. Check the execution result returned by the user.\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can't be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\nWhen you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.\nReply \"TERMINATE\" in the end when everything is done.\nuser_proxy:\nguardrails_agent: You are a guardrails agent and are tasked with ensuring that all parties adhere to the following responsible AI policies:\n- You MUST TERMINATE the conversation if it involves writing or running HARMFUL or DESTRUCTIVE code.\n- You MUST TERMINATE the conversation if it involves discussions of anything relating to hacking, computer exploits, or computer security.\n- You MUST TERMINATE the conversation if it involves violent or graphic content such as Harm to Others, Self-Harm, Suicide.\n- You MUST TERMINATE the conversation if it involves demeaning speech, hate speech, discriminatory remarks, or any form of harassment based on race, gender, sexuality, religion, nationality, disability, or any other protected characteristic.\n- You MUST TERMINATE the conversation if it involves seeking or giving  advice in highly regulated domains such as medical advice, mental health, legal advice or financial advice\n- You MUST TERMINATE the conversation if it involves illegal activities including when encouraging or providing guidance on illegal activities.\n- You MUST TERMINATE the conversation if it involves manipulative or deceptive Content including scams, phishing and spread false information.\n- You MUST TERMINATE the conversation if it involves involve sexually explicit content or discussions.\n- You MUST TERMINATE the conversation if it involves sharing or soliciting personal, sensitive, or confidential information from users. This includes financial details, health records, and other private matters.\n- You MUST TERMINATE the conversation if it involves deep personal problems such as dealing with serious personal issues, mental health concerns, or crisis situations.\nIf you decide that the conversation must be terminated, explain your reasoning then output the uppercase word \"TERMINATE\". If, on the other hand, you decide the conversation is acceptable by the above standards, indicate as much, then ask the other parties to proceed.\n\nRead the following conversation.\nThen select the next role from [assistant, user_proxy, guardrails_agent] to play. Only return the role.\n\n")),(0,i.kt)("p",null,"As you can see, this description is super confusing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is hard to make out where each agent's role-description ends"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"You")," appears numerous times, and refers to three separate agents (GroupChatManager, AssistantAgent, and GuardrailsAgent)"),(0,i.kt)("li",{parentName:"ul"},"It takes a lot of tokens!")),(0,i.kt)("p",null,"Consequently, it's not hard to see why the GroupChat manager sometimes struggles with this orchestration task."),(0,i.kt)("p",null,"With AutoGen 0.2.2 onward, GroupChat instead relies on the description field. With a description field the orchestration prompt becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are in a role play game. The following roles are available:\n\nassitant: A helpful and general-purpose AI assistant that has strong language skills, Python skills, and Linux command line skills.\nuser_proxy: A user that can run Python code or input command line commands at a Linux terminal and report back the execution results.\nguradrails_agent: An agent that ensures the conversation conforms to responsible AI guidelines.\n\nRead the following conversation.\nThen select the next role from [assistant, user_proxy, guardrails_agent] to play. Only return the role.\n")),(0,i.kt)("p",null,"This is much easier to parse and understand, and it doesn't use nearly as many tokens. Moreover, the following experiment provides early evidence that it works."),(0,i.kt)("h2",{id:"an-experiment-with-distraction"},"An Experiment with Distraction"),(0,i.kt)("p",null,"To illustrate the impact of the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field, we set up a three-agent experiment with a reduced 26-problem subset of the HumanEval benchmark. Here, three agents were added to a GroupChat to solve programming problems. The three agents were:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Coder (default Assistant prompt)"),(0,i.kt)("li",{parentName:"ul"},"UserProxy (configured to execute code)"),(0,i.kt)("li",{parentName:"ul"},"ExecutiveChef (added as a distraction)")),(0,i.kt)("p",null,"The Coder and UserProxy used the AssistantAgent and UserProxy defaults (provided above), while the ExecutiveChef was given the system prompt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are an executive chef with 28 years of industry experience. You can answer questions about menu planning, meal preparation, and cooking techniques.\n")),(0,i.kt)("p",null,"The ExecutiveChef is clearly the distractor here -- given that no HumanEval problems are food-related, the GroupChat should rarely consult with the chef. However, when configured with GPT-3.5-turbo-16k, we can clearly see the GroupChat struggling with orchestration:"),(0,i.kt)("h4",{id:"with-versions-prior-to-022-using-system_message"},"With versions prior to 0.2.2, using ",(0,i.kt)("inlineCode",{parentName:"h4"},"system_message"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Agents solve 3 out of 26 problems on their first turn"),(0,i.kt)("li",{parentName:"ul"},"The ExecutiveChef is called upon 54 times! (almost as much as the Coder at 68 times)")),(0,i.kt)("h4",{id:"with-version-022-using-description"},"With version 0.2.2, using ",(0,i.kt)("inlineCode",{parentName:"h4"},"description"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Agents solve 7 out of 26 problems on the first turn"),(0,i.kt)("li",{parentName:"ul"},"The ExecutiveChef is called upon 27 times! (versus 84 times for the Coder)")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field doubles performance on this task and halves the incidence of calling upon the distractor agent."),(0,i.kt)("h2",{id:"tips-for-writing-good-descriptions"},"Tips for Writing Good Descriptions"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptions")," serve a different purpose than ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message"),"s, it is worth reviewing what makes a good agent description. While descriptions are new, the following tips appear to lead to good results:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Avoid using the 1st or 2nd person perspective. Descriptions should not contain "I" or "You", unless perhaps "You" is in reference to the GroupChat / orchestrator'),(0,i.kt)("li",{parentName:"ul"},"Include any details that might help the orchestrator know when to call upon the agent"),(0,i.kt)("li",{parentName:"ul"},'Keep descriptions short (e.g., "A helpful AI assistant with strong natural language and Python coding skills.").')),(0,i.kt)("p",null,"The main thing to remember is that ",(0,i.kt)("strong",{parentName:"p"},"the description is for the benefit of the GroupChatManager, not for the Agent's own use or instruction"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"AutoGen 0.2.2 introduces a ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", becoming the main way agents describe themselves to orchestrators like GroupChat. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," defaults to the ",(0,i.kt)("inlineCode",{parentName:"p"},"system_message"),", there's nothing you need to change if you were already satisfied with how your group chats were working. However, we expect this feature to generally improve orchestration, so please consider experimenting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field if you are struggling with GroupChat or want to boost performance."))}p.isMDXComponent=!0}}]);