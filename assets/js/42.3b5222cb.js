(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{450:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("多智能体编排即Multi-Agent Orchestration（MAO），当下如Autogen, CrewAI 和 LangGraph均可灵活实现多智能体编排。\n本文将主要分为以下几个部分：")]),t._v(" "),s("ul",[s("li",[t._v("什么是MAO")]),t._v(" "),s("li",[t._v("不同的用例")]),t._v(" "),s("li",[t._v("AutoGen用例")]),t._v(" "),s("li",[t._v("CrewAI用例")]),t._v(" "),s("li",[t._v("LangGraph用例")])]),t._v(" "),s("h2",{attrs:{id:"mao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mao"}},[t._v("#")]),t._v(" MAO")]),t._v(" "),s("p",[s("code",[t._v("Multi-Agent Orchestration (MAO) refers to multi AI agents with different capabilities working together to solve a problem.")]),t._v("\n主要有以下几个特点：")]),t._v(" "),s("ul",[s("li",[t._v("AI-Agent之间可以一步一步的讨论，并实现最终的目标")]),t._v(" "),s("li",[t._v("AI-Agent之间以对话形式展开，就像人类一样")]),t._v(" "),s("li",[t._v("agent的转换和选择都是由LLM自主进行的")]),t._v(" "),s("li",[t._v("用户根据团队需要可以给不同agent分配不同的角色")])]),t._v(" "),s("h2",{attrs:{id:"用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用例"}},[t._v("#")]),t._v(" 用例")]),t._v(" "),s("p",[s("strong",[t._v("软件开发")]),t._v("：一个软件开发团队合作开发软件\n"),s("strong",[t._v("决策")]),t._v("：举行一个虚拟的圆桌会议，就某一主题进行辩论，让不同的代理Agent扮演不同的角色，做出商业决策。\n"),s("strong",[t._v("Simulations")]),t._v("：An entirely fake scenario with different agent playing different roles.")]),t._v(" "),s("h2",{attrs:{id:"autogen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autogen"}},[t._v("#")]),t._v(" AutoGen")]),t._v(" "),s("p",[t._v("由微软开发，擅长执行需要生成代码的任务。")]),t._v(" "),s("ul",[s("li",[t._v("首先，终端中执行命令："),s("code",[t._v("litellm --model huggingface/google/gemma-2b-it")]),t._v("，此时模型推理端口将被自动拉起")]),t._v(" "),s("li",[t._v("以下是一个快速使用AutoGen的小demo，其中有两个Agent分别是AssistantAgent和UserProxyAgent")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pprint\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" autogen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AssistantAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UserProxyAgent\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\nos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AUTOGEN_USE_DOCKER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no'")]),t._v("\n\nconfig_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'model'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_local_model'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://0.0.0.0:4000/'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nllm_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config_list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nassistant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AssistantAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assistant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("llm_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" llm_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuserproxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserProxyAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_proxy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("is_termination_msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nchat_result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user_proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initiate_chat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assistant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Write a shell script to isplay files.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chat_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("在群体讨论场景中使用AutoGen")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pprint\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" autogen\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\nos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AUTOGEN_USE_DOCKER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no'")]),t._v("\n\nconfig_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'model'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_local_model'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base_url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://0.0.0.0:4000/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nllm_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config_list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cache_seed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化不同的agent角色")]),t._v("\nuser_proxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" autogen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserProxyAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User_proxy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    system_message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A human admin.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    code_execution_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'last_n_messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    human_input_mode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TERMINATE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncoder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" autogen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AssistantAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Coder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    llm_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" llm_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    system_message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Understands codes and technialities of any feature evelopment.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" autogen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AssistantAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Product_manager'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    llm_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" llm_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    system_message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Creative in software product ideas.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngroupchat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" autogen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupChat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("agents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user_proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" coder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" messages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_round "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmanager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" autogen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupChatManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupchat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" groupchat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" llm_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" llm_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user_proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initiate_chat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Discuss product design and technicalities for adding OTP based authentication in a app.'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" discussion "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chat_history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("discussion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("discussion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("discussion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'role'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("discussion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("这里AssistantAgent都用到了llm，UserProxyAgent负责接收人类的输入，或者设置为允许人类输入的模式")]),t._v(" "),s("h2",{attrs:{id:"crewai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crewai"}},[t._v("#")]),t._v(" CrewAI")]),t._v(" "),s("p",[t._v("尽管AutoGen非常流行，但是我个人觉得CrewAI更加简单易用。请看下面的案例：\n"),s("code",[t._v("pip install creai")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" creai "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Crew"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Process\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" langchain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("llms "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HuggingFaceHub\n\nos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HUGGINGFACEHUB_API_TOKENS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\nllm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HuggingFaceHub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repo_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gemma-2b-it'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model_kwargs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_new_tokens"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nresearcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    role "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Senior Research Analyst"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    goal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Uncover cutting-edge development in AI and data science"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backstory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You work at a leading tech think tank......"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    verbose "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    allow_delegation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    llm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" llm\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwriter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    role "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tech Content Strategist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    goal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"......"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backstory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"......"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    verbose "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    allow_delegation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    llm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" llm\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create tasks for your agents")]),t._v("\ntask1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    description "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List down major ML algorithms.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    expected_output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Full analysis report in short bullet points.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    agent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" researcher\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntask2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    description "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Using the insights provided, develop an engaging blog post that highlights the most ignificantML algorithms and a starting point for beginners. Dont use jargons'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    expected_output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Full blog post of at least 4 paragraphs.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    agent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" writer\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Initiate your crew with a sequential process")]),t._v("\ncrew "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Crew"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    agents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("researcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tasks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("task1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("task2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    verbose "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get your crew work!")]),t._v("\nres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" crew"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kickoff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"langgraph"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#langgraph"}},[t._v("#")]),t._v(" LangGraph")]),t._v(" "),s("p",[t._v("LangGraph是著名的LangChain的扩展包，比AutoGen和CreAI都要复杂一些，相比于其他两个框架用起来也更加的灵活和易于定制化。LangGraph不仅可以用于MAO，也可以灵活用于其他的LMM应用。\n"),s("code",[t._v("pip install langgraph")]),t._v("\n在真正使用LangGraph之前，我们需要理解langchain中chain和agent的概念：")]),t._v(" "),s("ul",[s("li",[t._v("chain：LLM设计的一系列流程，原始的LangChain基于固定的流程，太过僵硬")]),t._v(" "),s("li",[t._v("agent：llm+tools")])]),t._v(" "),s("p",[t._v("LangGraph就是一种更加灵活的Chains，可以灵活引入循环、定制的逻辑")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TypedDict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Optional\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" langgraph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graph "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" StateGraph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" END\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" langchain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("llms "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HuggingFaceHub\nos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HUGGINGFACEHUG_API_TOEKN'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\nllm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HuggingFaceHub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化后续节点需要读取的信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StateGraph")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TypedDict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化后续需要用到的变量")]),t._v("\n    question "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    classification "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    response "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义条件边")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行工作流")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);