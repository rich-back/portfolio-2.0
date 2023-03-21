interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  assets: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: image;
  backgroundInfo: string;
  profilePic: image;
  phone: string;
  email: string;
  address: string;
  socials: Social[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
  //   ^ should this be Url type not string?
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  skillImage: image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  skillImage: image;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  projectImage: image;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  companyImage: image;
  company: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  details: string[];
}
