type TProfile = {
  info: TInfo;
  languages: TLanguage[];
  experiences: TExperience[];
  wakatime: TWakatime;
};

type TInfo = {
  photo: string;
  name: string;
  jobTitle: string;
  contacts: TContact[];
  skills: TSkill[];
  location?: TLocation;
};

type TWakatime = {
  languages: string;
  coding: string;
};

type TExperience = {
  from: string;
  to: string;
  company: string;
  link: string;
  position: string;
  responsibilities?: string[];
  achievements?: string[];
};

type TLanguage = {
  label: string;
  progress: number;
  level: string;
};

type TSkill = {
  label: string;
  progress: number;
};

type TContact = {
  type: string;
  label: string;
  link: string;
};

type TLocation = {
  city: string;
  country: string;
};
