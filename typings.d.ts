interface ISanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface IImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IPageInfo extends ISanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: IImage;
  name: string;
  phoneNumber: string;
  profilePicture: IImage;
}

export interface ITechnology extends ISanityBody {
  _type: "skills";
  image: IImage;
  title: string;
}

export interface ISkills extends ISanityBody {
  _type: "skills";
  image: IImage;
  title: string;
}

export interface IProjects extends ISanityBody {
  _type: "projects";
  title: string;
  image: IImage;
  summary: string;
  technologies: ITechnology[];
  linkToBuild: string;
}

export interface IExperiences extends ISanityBody {
  _type: "experiences";
  company: string;
  dateEnded: date;
  dateStarted: date;
  dutiesResponsibilities: string[];
  isCurrentWorking: boolean;
  jobTitle: string;
  technologies: ITechnology[];
}

export interface ISocial extends ISanityBody {
  _type: "social";
  title: string;
  url: string;
}
