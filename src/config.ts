// 导入类型定义，确保各配置对象类型安全
import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 站点基础配置
export const siteConfig: SiteConfig = {
	title: "QingmYiz's Blog", // 网站主标题
	subtitle: "Just for love", // 网站副标题
	lang: "zh_CN", // 站点语言，可选：'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	themeColor: {
		hue: 250, // 主题色调，0-360，示例：红色0，青色200，粉色345
		fixed: false, // 是否固定主题色（true时访客无法切换主题色）
	},
	banner: {
		enable: false, // 是否启用顶部横幅
		src: "assets/images/demo-banner.png", // 横幅图片路径，相对 /src 目录；以 / 开头则相对 /public
		position: "center", // 图片位置，仅支持 'top', 'center', 'bottom'
		credit: {
			enable: false, // 是否显示图片版权信息
			text: "", // 版权文本
			url: "", // （可选）原图或作者链接
		},
	},
	toc: {
		enable: true, // 是否显示右侧目录
		depth: 2, // 目录显示的最大标题层级，1-3
	},
	favicon: [
		// 自定义 favicon，留空则使用默认图标
		// {
		//   src: '/favicon/icon.png',    // favicon 路径，相对 /public
		//   theme: 'light',              // （可选）'light' 或 'dark'，用于深浅色模式
		//   sizes: '32x32',              // （可选）favicon 尺寸
		// }
	],
};

// 顶部导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 首页
		LinkPreset.Archive, // 归档
		LinkPreset.About, // 关于
		{
			name: "GitHub",
			url: "https://github.com/QingmYiz/fuwari1", // 外部链接无需加基路径
			external: true, // 外链标识，显示外链图标并新标签页打开
		},
	],
};

// 个人资料卡片配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 头像路径，相对 /src 或 /public
	name: "QingmYiz", // 昵称
	bio: `Education:
	 Shandong University of Technology — B.Eng. Electronic & Information Engineering.
	 Love coding and sharing.`, // 简介
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili", // 图标代码，参考 https://icones.js.org/
			// 如未包含该图标集，需执行 `pnpm add @iconify-json/<icon-set-name>`
			url: "https://www.bilibili.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/QingmYiz",
		},
	],
};

// 版权信息配置
export const licenseConfig: LicenseConfig = {
	enable: true, // 是否显示版权信息
	name: "CC BY-NC-SA 4.0", // 协议名称
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 协议链接
};

// 代码高亮主题配置
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）会被 astro.config.mjs 覆盖
	// 主题需选择暗色系，目前仅支持深色背景
	theme: "github-dark",
};
