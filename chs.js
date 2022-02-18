/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Buy Max": "购买最大",
    "Variables": "变量",
    "You Are Gaining": "你收集 ",
    "time": " 时间",
    "h-U-ndred": "百",
    "hmmmmmm, ok": "嗯嗯嗯，好的",
    "more 'U'": "更多 'U'",
    "in cm.": "以厘米为单位。",
    "It's done right?": "做对了吗？",
    "Lastly 'd' variable": "最后是 'd' 变量",
    "more more more more more?": "更多更多更多更多更多？",
    "more more more more more...": "更多更多更多更多更多...",
    "no": "不",
    "no(?": "不(?",
    "Ofcourse 'b' variable": "当然是 'b' 变量",
    "p-U-wer of 15": "p-U-wer 为 15",
    "pls buff res-upgrades": "请buff重新升级",
    "PP???": "聚丙烯？？？",
    "Prestige": "声望",
    "prestiged": "有声望的",
    "reach f(t) = 1.79e308": "达到 f(t) = 1.79e308",
    "Research": "研究",
    "seems familliar": "似曾相识",
    "senior": "高级的",
    "sigh...": "叹...",
    "slow": "慢的",
    "smart": "聪明的",
    "so no 'i' to 'v'???": "所以没有'i'到'v'？？？",
    "so we not talking about 'i' to 'v'...": "所以我们不是在谈论'i'到'v'......",
    "speed of light": "光速",
    "speed of potato": "土豆的速度",
    "speed of potato squared": "马铃薯的速度平方",
    "The 'a' variable": "'a' 变量",
    "The is no 'U' in a million": "一百万中没有“U”",
    "the real vroom vroom": "真正的呜呜呜",
    "THERE IS LITERALLY A 'g'": "字面上有一个“g”",
    "there is literally no 'g'": "字面上没有'g'",
    "tho-U-sand": "千",
    "Time Machine": "时间机器",
    "u study NOW!": "你现在学习！",
    "Unlock Research.": "解锁研究。",
    "Unlock Time Machine": "解锁时光机",
    "Unlock Time Machine Genarator Enchancer (T.M.G.E.": "解锁时间机器发生器增强器（T.M.G.E.",
    "unnecessary": "不必要",
    "very old": "很老",
    "very smort": "非常聪明",
    "very very smort": "非常非常聪明",
    "very very very smort": "非常非常非常聪明",
    "very very very very": "非常非常非常非常",
    "veryyyyy yyyyyyyy yyyyyyyy yyyyyyyy": "非常常 常常常常常 常常常常 常常常常常",
    "vroom vroom...": "呜呜呜……",
    "wait what happened to 'i' to 'v'": "等待“i”到“v”发生了什么",
    "Warp Time 60 times": "扭曲时间 60 次",
    "what does it even mean": "这甚至意味着什么",
    "what even is the speed of potatoes?": "土豆的速度是多少？",
    "WOW": "哇",
    "wow faster potato": "哇土豆更快",
    "100,000 knowledge is too much :c": "100,000 知识太多了 :c",
    "Get the second cap of Warp Warp Time and T.M.G.E.": "获得 扭曲扭曲时间 和 T.M.J. 的第二上限",
    "Have 1 'e' variab- f(t) = 100,000,000": "拥有 1 'e' 变量- f(t) = 100,000,000",
    "Its billion, duh...": "它的十亿，呃...",
    "yet again no smart enough": "再次不够聪明",
    "a super long named thing": "一个超长名字的东西",
    "and again, and but yet again no smart enough": "一次又一次，但又一次不够聪明",
    "and but yet again no smart enough": "但又一次不够聪明",
    "And then 'c' variable": "然后是'c'变量",
    "as for now": "就目前而言",
    "billi-U-n": "比利-U-n",
    "but no smart": "但不聪明",
    "but yet again no smart enough": "但又不够聪明",
    "Buy all first row of Pres-Upgrades": "购买所有第一排 Pres-升级",
    "Buy all of the 'U' upgrades from the first to third row.": "购买从第一排到第三排的所有“U”升级。",
    "Buy all of the 'U' upgrades in the first row.": "购买第一排的所有“U”升级。",
    "Buy Res-Upgrades 1 to 4.": "购买 Res-升级 1 到 4。",
    "Buy the first 'pU' upgrade.": "购买第一个“pU”升级。",
    "Buy the first 'U' upgrade.": "购买第一个“U”升级。",
    "capped": "上限",
    "challenged": "挑战",
    "Complete all Function of 'f' Automation Challenges": "完成“f”自动化挑战的所有功能",
    "copy cat of 'U' Variable, smh": "'U' 变量的复制猫，smh",
    "Achievement Gotten!": "成就达成！",
    "Unlock Research": "解锁研究",
    "Upgrades": "升级",
    "You Have": "你有 ",
    "Res-Upgrades": "资源升级",
    "Additive Research Upgrade": "附加研究升级",
    "Knowledge": "知识",
    "Multiplicative Research Upgrade": "乘法研究升级",
    "Multiply your Knowledge gain based on f(t": "将您的知识增益乘以 f(t",
    "Multiply your Knowledge gain based on Knowledge": "基于知识乘以你的知识增益",
    "Multiply your Knowledge gain based on time": "根据时间乘以你的知识增益",
    "The 'pU' Achievements are wierd af": "'pU' 的成就很奇怪",
    "the 'pU'-n is not so 'pU'-nny": "'pU'-n 不是那么'pU'-nny",
    "the prestiged": "声望",
    "weirdo": "怪人",
    "what the hell even is that": "这是什么鬼东西",
    "WOAH": "哇",
    "wow good for you": "哇对你有好处",
    "big no no": "大不不",
    "AUTO - MANIAC": "自动 - 狂人",
    "Buy all of the first row of 4D-Upgrades": "购买所有第一排的 4D-升级",
    "BUY THEM ALL, YASSSSSSSSSS": "全部买下来，YASSSSSSSSSS",
    "Complete all Function of Research Automation Challenges": "完成研究自动化挑战的所有功能",
    "Complete all Function of Time Machine Automation Challenges": "完成时间机器自动化挑战的所有功能",
    "damn, this is full of spoilers": "该死，这充满了剧透",
    "Enter the fourth dimension": "进入第4维度",
    "GASPED": "喘不过气来",
    "HOLY YOU'RE DISTORTED": "天哪，你被扭曲了",
    "How did you manage this...": "你是怎么做到的...",
    "IMPOSSIBLE": "不可能的",
    "Layer 1 Auto": "第 1 层自动",
    "packed": "打包",
    "million": "百万",
    "Possimpossible": "有可能",
    "Prob done(?": "问题完成（？",
    "Reach infinite PP, hehe": "达到无限PP，呵呵",
    "Reach infinity Distortions": "达到无限扭曲",
    "Reach infinity in the 4th Dimension": "在第4维度达到无限",
    "Reward: Unlock f(t) variables 'Buy Max'": "奖励：解锁 f(t) 变量“购买最大”",
    "Reward: Unlock g(t) variables 'Buy Max'": "奖励：解锁 g(t) 变量“购买最大”",
    "Reward: Unlock Research 'Buy Max'": "奖励：解锁研究“购买最大”",
    "Shooketh": "休克",
    "So this is slow...": "所以这很慢...",
    "Increase Time Machine Fragments gained": "增加获得的时间机器碎片",
    "Infos": "信息",
    "Locked...": "未解锁...",
    "Time Fragments": "时间碎片",
    "Time Machine Generator": "时间机器发生器",
    "Use Time Machine Fragments to speed up time": "使用时间机器片段加速时间",
    "WARNING: Resets 'Time Fragments', 'f(t) value', 'Time Machine Generator' Buyable, & 'Warp Time' Buyable": "警告：重置“时间片段”、“f(t) 值”、“时间机器发生器”可购买，和“扭曲时间”可购买",
    "Warp the time warper to warp the warped time more.": "扭曲时间扭曲器以扭曲扭曲的时间。",
    "Warp Time": "扭曲时间",
    "Warp Warp Time": "扭曲扭曲时间",
    "Warp Warp Time effect additive is": "扭曲扭曲时间 效果附加",
    "You are gaining": "你获得了",
    "Unlock the second row of Res-Upgrades": "解锁第2行 预升级",
    "Unlock the third row of 'U' Upgrades": "解锁第3行 “U”升级",
    "Pres-Upgrades": "预升级",
    "1% 'a, b, c & d' Variable Upgrade boost every Res-Upgrades bought in 2nd row.": "在第 2 行购买的每个 资源升级 都会增加 1% 的“a、b、c 和 d”变量升级。",
    "(Only Time Machine Generator and Time Warp": "（只有 时间机器发生器 和 时间扭曲",
    "Multiply 'U' value based on unspent PP": "根据未使用的 PP 乘以“U”值",
    "Multiply your Knowledge gain based on Time Fragments": "根据时间碎片乘以您的知识增益",
    "Name is too long, so I acronymed it. Basically increase the power of Time Machine Generator.": "名字太长了，所以我把它缩写了。 基本上增加了 时间机器发生器 的威力。",
    "Unlock 'Buy Max' in Time Machine. You lazy goose...": "在 时间机器 中解锁“购买最大”。 你个懒鹅...",
    "Unlock 'pU' Upgrades": "解锁“pU”升级",
    "Unlock 'pU' Variable Upgrade in Research": "解锁研究中的“pU”变量升级",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Cost: ": "成本: ",
    "Have f(t) = ": "拥有 f(t) = ",
    "'U' value is more than ": "'U' 值大于 ",
    "f(time+1) = f(time) + ": "f(时间+1) = f(时间) + ",
    "Achievements:": "成就:",
    "'U' Upgrade ": "'U' 升级 ",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Res-Upgrade ": "资源升级 ",
    "Increase the value of knowlege gain additively ": "增加附加知识增益的价值 ",
    "Increase the value of knowlege gain multiplicatively ": "成倍增加知识增益的价值 ",
    "challenged ": "挑战 ",
    "'pU' value is more than ": "'pU' 值大于 ",
    "Pres-Upgrade ": "预升级 ",
    "Next effect additive change is at ": "下一个效果附加变化在 ",
    "'pU' Upgrade ": "'pU' 升级 ",
    "Increase the boost of 'U' Variable Upgrade to ": "将“U”变量升级的提升增加到",
    "Max = ": "最大 = ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    " Per Second": " 每秒",
    " 'U' value": " 'U' 的值",
    " your Knowledge gain": " 你的知识增益",
    " variable value": " 变量值",
    " Variable Upgrade": " 变量升级",
    " 'U' value every 'a, b, c & d' Variable Upgrade bought.": "'U' 值每个 'a, b, c & d' 变量升级购买。",
    " 'U' value every Res-Upgrade bought.": " 'U' 值每个已购买 资源升级.",
    " 'U' value.": " 'U' 的值.",
    " 'U' value every Warp Time bought": " 每次购买 扭曲时间 的“U”值",
    " 'U' value every Time Machine Generator and Time Warp": " 每个 时间机器发生器 和 扭曲时间 的“U”值",
    " 'U' value every Pres-Upgrades bought": " 每次购买的 资源升级 的“U”值",
    " 'U' value every 'U' Upgrades bought in 3rd row.": " 在第 3 排购买的每个“U”升级都具有“U”价值。",
    " 'a, b, c & d' Variable Upgrade boost every 'U' Variable Upgrade.": " 'a, b, c & d' 变量升级会提升每个 'U' 变量升级。",
    " Multiplicative Research Upgrade every Additive Research Upgrade.": " 乘法研究升级每次加法研究升级。",
    " 'pU' value": " 'pU' 值",
    " 'pU' value every 'w, x, y & z' Variable bought": "'pU' 值每个 'w, x, y & z' 变量购买",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) U$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) a\(t$/,
    /^([\d\.]+)e([\d\.,]+) b\(t$/,
    /^([\d\.]+)e([\d\.,]+) c\(t$/,
    /^([\d\.]+)e([\d\.,]+) d\(t$/,
    /^([\d\.]+)e([\d\.,]+) e\(t$/,
    /^([\d\.]+)e([\d\.,]+) f\(t$/,
    /^([\d\.]+)e([\d\.,]+) g\(t$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Next effect additive change is at (.+) Warp Warp Time$/, '下一个效果附加变化是在 $1 扭曲扭曲时间'],
    [/^Increase \'U\' Upgrade (.+) base by (.+)$/, '将“U”升级 $1 基础增加 $2'],
    [/^Remove (.+) in g\(t\) formula$/, '删除 g\(t\) 公式中的 $1'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have greater than (.+) T.M.G.E.,$/, '您拥有超过 $1 个 时间机器发生器，'],
    [/^You have greater than (.+) Warp Warp Time,$/, '您拥有超过 $1 个 扭曲扭曲时间，'],
    [/^Have (.+) variable amount.$/, '拥有 $1 变量数量。'],
    [/^Gain (.+) time per second$/, '获得 $1 时间每秒'],
    [/^Have (.+) Knowledge.$/, '拥有 $1 知识。'],
    [/^x([\d\.]+) \'U\' value every (.+) Variable bought.$/, 'x$1 \'U\' 的值每 $2 已购买变量.'],
    [/^x([\d\.]+) your \'U\' value every (.+) Upgrades bought$/, 'x$1 你的 \'U\' 的值每 $2 已购买升级'],
    [/^(.+) = (.+) \(bought:(.+)$/, '$1 = $2 \(已购买:$3'],
    [/^Increase the value of (.+) Variable$/, '增加 $1 变量的值'],
    [/^\'(.+)\' Variable$/, '\'$1\' 变量'],
    [/^its effect additive is changed from (.+) to$/, '其效果加成从 $1 变为'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Next at (.+) f\(t$/, '下一个在 $1 f\(t'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+) Time Machine Generators$/, '$1 时间机器发生器'],
    [/^([\d\.]+) Time Warps$/, '$1 时间扭曲'],
    [/^([\d\.]+) Knowledge$/, '$1 知识'],
    [/^([\d\.]+)e([\d\.,]+) Knowledge$/, '$1e$2 知识'],
    [/^([\d\.]+)e([\d\.,]+) Time Fragments$/, '$1e$2 时间碎片'],
    [/^([\d\.,]+) Time Fragments$/, '$1 时间碎片'],
    [/^([\d\.,]+) Warp Warp Time$/, '$1 扭曲扭曲时间'],
    [/^([\d\.,]+) Knowledge$/, '$1 知识'],
    [/^([\d\.,]+) f\(t$/, '$1 f\(t'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cap: (.+) at (.+).$/, '上限: $1 在 $2.'],
    [/^Currently: (.+) \(bought:(.+)$/, '当前：$1 （已购买：$2'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);