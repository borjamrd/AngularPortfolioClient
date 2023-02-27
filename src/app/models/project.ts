export interface ProjectModel {
    _id: string,
    name: string,
    urlProject: string;
    tags: [];
    projectImage: string | undefined;
    subtitle: string;
    short_description: string;
    full_description: string;
    date: string;
    github: string;
}