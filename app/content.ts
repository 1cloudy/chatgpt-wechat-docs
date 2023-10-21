import Introduction from "./content/introduction.mdx";
import HowToUse from "./content/how_to_use.mdx"
import BaseFeatures from "./content/base_features.mdx"
import ProFeatures from "./content/pro_features.mdx"
import MaxFeatures from "./content/max_features.mdx"
import FrequentlyAskedQuestions from "./content/frequently_asked_questions.mdx"
import UserFeedbackAndCommunitySupport from "./content/user_feedback_and_community_support.mdx"
import PrivacyPolicyAndTermsOfUse from "./content/privacy_policy_and_terms_of_use.mdx"
import ErrorCodesAndSolutions from "./content/error_codes_and_solutions.mdx"
import AccountManagement from "./content/account_management.mdx"
import SocialAutoPost from "./content/social_auto_post.mdx"

export type Doc = {
  title: string;
  description: string;
  category: string;
  priority: number;
  slug: string;
  content: JSX.Element;
};

export const allDocs: Doc[] = [
  {
    title: "网站介绍",
    description: "关于ChatGPT For WeChat的简要介绍",
    category: "ChatGPT For WeChat",
    priority: 1,
    slug: "/docs/introduction",
    content: Introduction({}),
  },
  {
    title: "使用指南",
    description: "如何使用插件？",
    category: "ChatGPT For WeChat",
    priority: 2,
    slug: "/docs/how_to_use",
    content: HowToUse({}),
  },
  {
    title: "账户管理",
    description: "全面了解插件的功能",
    category: "ChatGPT For WeChat",
    priority: 3,
    slug: "/docs/account_management",
    content: AccountManagement({}),
  },
  {
    title: "Basic",
    description: "在微信中免费使用ChatGPT",
    category: "Features",
    priority: 4,
    slug: "/docs/base_features",
    content: BaseFeatures({}),
  },
  {
    title: "Pro",
    description: "适合群聊",
    category: "Features",
    priority: 5,
    slug: "/docs/pro_features",
    content: ProFeatures({}),
  },
  {
    title: "Max",
    description: "全面了解插件的功能",
    category: "Features",
    priority: 6,
    slug: "/docs/max_features",
    content: MaxFeatures({}),
  },
  {
    title: "SocialAutoPost",
    description: "定时自动发布内容",
    category: "SocialAutoPost",
    priority: 7,
    slug: "/docs/social_auto_post",
    content: SocialAutoPost({}),
  },
  {
    title: "常见问题",
    description: "了解如何使用插件的基本功能",
    category: "Support",
    priority: 7,
    slug: "/docs/frequently_asked_questions",
    content: FrequentlyAskedQuestions({}),
  },
  {
    title: "错误代码",
    description: "了解如何使用插件的基本功能",
    category: "Support",
    priority: 8,
    slug: "/docs/error_codes_and_solutions",
    content: ErrorCodesAndSolutions({}),
  },
  {
    title: "社区支持",
    description: "了解如何使用插件的基本功能",
    category: "Support",
    priority: 9,
    slug: "/docs/user_feedback_and_community_support",
    content: UserFeedbackAndCommunitySupport({}),
  },
  // {
  //   title: "隐私政策与使用条款",
  //   description: "了解如何使用插件的基本功能",
  //   category: "Support",
  //   priority: 10,
  //   slug: "/docs/privacy_policy_and_terms_of_use",
  //   content: PrivacyPolicyAndTermsOfUse({}),
  // },
];
