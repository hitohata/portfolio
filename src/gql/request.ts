import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Basic information like name, title */
export type Basics = {
  __typename?: 'Basics';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** currently living */
  location: Scalars['String']['output'];
  /** phone number */
  phone: Scalars['String']['output'];
  /** general title */
  title: Scalars['String']['output'];
};

/** contact information. */
export type ContactInfo = {
  __typename?: 'ContactInfo';
  /** just the placeholder or an account name */
  name: Scalars['String']['output'];
  type: ContactType;
  /** the URL to my contact information */
  url: Scalars['String']['output'];
};

export enum ContactType {
  EMail = 'EMail',
  GitHub = 'GitHub',
  LinkedIn = 'LinkedIn'
}

export type Education = {
  __typename?: 'Education';
  degree: Scalars['String']['output'];
  /** return YYYY. If I still belong to this institution., return null. */
  finish?: Maybe<Scalars['String']['output']>;
  institution: Scalars['String']['output'];
  location: Scalars['String']['output'];
  /** return YYYY */
  start: Scalars['String']['output'];
};

/** My experience */
export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  /** MMM. YYYY. If I still belong to this company., return null. */
  endDate?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  /** MMM. YYYY */
  startDate: Scalars['String']['output'];
  /** my title in this company */
  title: Scalars['String']['output'];
  work: Array<Work>;
};

/** The project I worked except for the work */
export type Project = {
  __typename?: 'Project';
  /** description for this project */
  details: Array<Scalars['String']['output']>;
  links: Array<ProjectLink>;
  /** Project Name */
  projectTitle: Scalars['String']['output'];
  /** The tech stacks I used for this project */
  techStacks: Array<Scalars['String']['output']>;
};

/** Link to the reference */
export type ProjectLink = {
  __typename?: 'ProjectLink';
  /** link type. Like GitHub, Blog and so on */
  linkType: ProjectLinkType;
  /** reference name. Like blog, github */
  title: Scalars['String']['output'];
  /** the URL to the reference */
  url: Scalars['String']['output'];
};

export enum ProjectLinkType {
  Application = 'Application',
  Blog = 'Blog',
  Document = 'Document',
  Gql = 'GQL',
  GitHub = 'GitHub',
  Npm = 'NPM',
  Restapi = 'RESTAPI'
}

export type Query = {
  __typename?: 'Query';
  /** all contact information. */
  allContactInformation: Array<ContactInfo>;
  /** basic information. */
  basics: Basics;
  /** specific information. */
  contactInformation: ContactInfo;
  /** specific project. The order starts from 1, and up to 3. */
  education: Education;
  /** educations I've took */
  educations: Array<Education>;
  /** specific experience. The order starts from 1, and up to 2. */
  experience: Experience;
  /** my all experiences. */
  experiences: Array<Experience>;
  /** overview. */
  overview: Scalars['String']['output'];
  /** specific project. The order starts from 1, and up to 4. */
  project: Project;
  /** Projects I was involved */
  projects: Array<Project>;
  /** tech skill for each category */
  technicalSkill: TechnicalSkill;
  /** tech skills I have */
  technicalSkills: Array<TechnicalSkill>;
};


export type QueryContactInformationArgs = {
  contactType?: InputMaybe<ContactType>;
};


export type QueryEducationArgs = {
  order: Scalars['Int']['input'];
};


export type QueryExperienceArgs = {
  order: Scalars['Int']['input'];
};


export type QueryProjectArgs = {
  order: Scalars['Int']['input'];
};


export type QueryTechnicalSkillArgs = {
  category?: InputMaybe<TechStackCategory>;
};

export enum TechStackCategory {
  Frameworks = 'Frameworks',
  Infrastructure = 'Infrastructure',
  Languages = 'Languages',
  Others = 'Others'
}

/** My Skills */
export type TechnicalSkill = {
  __typename?: 'TechnicalSkill';
  /** Tech stack category */
  category?: Maybe<TechStackCategory>;
  stacks: Array<Scalars['String']['output']>;
};

/** the detail of my experience */
export type Work = {
  __typename?: 'Work';
  /** What I did in this classification */
  details: Array<Scalars['String']['output']>;
  /** The major classification */
  projectTitle?: Maybe<Scalars['String']['output']>;
  techStacks: Array<Scalars['String']['output']>;
};

export type MyResumeQueryVariables = Exact<{ [key: string]: never; }>;


export type MyResumeQuery = { __typename?: 'Query', overview: string, basics: { __typename?: 'Basics', lastName: string, location: string, firstName: string, title: string }, allContactInformation: Array<{ __typename?: 'ContactInfo', type: ContactType, url: string }>, projects: Array<{ __typename?: 'Project', details: Array<string>, projectTitle: string, techStacks: Array<string>, links: Array<{ __typename?: 'ProjectLink', title: string, linkType: ProjectLinkType, url: string }> }>, technicalSkills: Array<{ __typename?: 'TechnicalSkill', category?: TechStackCategory | null, stacks: Array<string> }> };


export const MyResumeDocument = gql`
    query MyResume {
  basics {
    lastName
    location
    firstName
    title
  }
  overview
  allContactInformation {
    type
    url
  }
  projects {
    details
    links {
      title
      linkType
      url
    }
    projectTitle
    techStacks
  }
  technicalSkills {
    category
    stacks
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    MyResume(variables?: MyResumeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MyResumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyResumeQuery>(MyResumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MyResume', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;