import home from "./images/home.png";
import star from "./images/star.png";
import user from "./images/user.png";
import building from "./images/building.png";
import settings from "./images/cog.png";
import link from "./images/link.png";
import users from "./images/users.png";
import chat from "./images/comments-alt.png";
import commonCompanyLogo from "./images/Logo.png";

const items = [
  { name: "Dashboard", icon: home, selected: true, dropdown: [] },
  { name: "Intels", icon: star, selected: false, dropdown: [] },
  { name: "Leads", icon: user, selected: false, dropdown: [] },
  {
    name: "Accounts",
    icon: building,
    selected: false,
    dropdown: ["Manage all", "Track new accounts", "Bulk Import"],
  },
  {
    name: "Preferences",
    icon: settings,
    selected: false,
    dropdown: ["Product Focus", "Intel Preferences", "Lead Persona"],
  },
  { name: "Integrations", icon: link, selected: false, dropdown: [] },
  { name: "Team", icon: users, selected: false, dropdown: [] },
  { name: "Help/Support", icon: chat, selected: false, dropdown: [] },
];

const sampleOrgs = [
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
  {
    company: "Harrow Inc.",
    slug: "harrow-inc",
    logo: commonCompanyLogo,
    website: "harrow.com",
    tracking: false,
  },
];

const apiEndpoint =
  "https://staging.staging.b2brain.com/search/autocomplete_org_all/";

export { items, sampleOrgs, apiEndpoint };
