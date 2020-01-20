const Projects = [
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: true,
        ShowcaseId: 0,
        HasImages: true,
        Img: "2.png"
    },
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: true,
        ShowcaseId: 1,
        HasImages: true,
        Img: "2.png"
    },
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: true,
        ShowcaseId: 2,
        HasImages: true,
        Img: "2.png"
    },
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
    },
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
    },
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
    }
];

const GetProjects = () => {
    return Projects.filter(Element => {
        if(!Element.OnShowcase)
            return Element;
    });
}

const GetShowcaseProjectById = id => {
    return Projects.filter(Element => {
        if(Element.OnShowcase)
            if(Element.ShowcaseId == id)
                return Element;
    })[0];
}

export default { GetShowcaseProjectById, GetProjects };