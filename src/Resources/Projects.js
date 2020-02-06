const Projects = [
    {
        Title: "GitProfile",
        Desc: `This is simple webapp which gives a nicer look to your Github profile.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: true,
        ShowcaseId: 0,
        HasImages: true,
        Img: "showcase_project_1.png",
        Stack: ["HTML", "CSS", "MangoDB", "React"]
    },
    {
        Title: "Chatzo",
        Desc: `This is a simple realtime chatroom webapp.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/chat-app",
        HasLink: true,
        Link: "https://chat-app-v-1.herokuapp.com/",
        OnShowcase: true,
        ShowcaseId: 1,
        HasImages: true,
        Img: "showcase_project_2.png",
        Stack: ["ReactJs", "NodeJs", "Express", "Socket.io"]
    },
    {
        Title: "Sort Visualizer",
        Desc: `This webapp lets you visualize various sorting algorithms.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/Sorting-Visualizer",
        HasLink: true,
        Link: "https://sort-visualizer-v1.herokuapp.com/",
        OnShowcase: true,
        ShowcaseId: 2,
        HasImages: true,
        Img: "showcase_project_3.png",
        Stack: ["ReactJs", "Material UI"]
    },
    {
        Title: "Google Keep Clone",
        Desc: `Built the Google Keep clone which allows users to save, update and delete tasks/notes using full-
        stack javascript frameworks to facilitate easy development and maintainence of application.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
        Stack: ["ReactJs", "NodeJs", "Express", "Socket.io"]
    },
    {
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Wit potential. Wit potential. Wit potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
        Stack: ["HTML", "CSS", "MangoDB", "React"]
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
        Stack: ["HTML", "CSS", "MangoDB", "React"]
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
        Stack: ["HTML", "CSS", "MangoDB", "React"]
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
        Stack: ["HTML", "CSS", "MangoDB", "React"]
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
        Stack: ["HTML", "CSS", "MangoDB", "React"]
    },{
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
        Stack: ["HTML", "CSS", "MangoDB", "React"]
    }
    ,{
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
        Stack: ["HTML", "CSS", "MangoDB", "React"]
    }
    ,{
        Title: "Nikita Gill",
        Desc: `Within you is a light that is brighter than the belittling words 
            of those who are afraid of your potential. Within you is an entire 
            universe, just waiting to be built.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/GitProfile",
        HasLink: true,
        Link: "https://git--profile.herokuapp.com/",
        OnShowcase: false,
        Stack: ["HTML", "CSS", "MangoDB", "React"]
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
        Stack: ["HTML", "CSS", "MangoDB", "React"]
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