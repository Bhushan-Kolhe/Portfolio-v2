const Projects = [
    {
        Title: "GitProfile",
        Desc: `This is a simple web application which gives a nicer look to your Github profile. This uses Github API to get user data and display repositories.`,
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
        Desc: `This is a simple chatroom web-application which allows user to create new chatrooms and join any chatroom. This uses socket.io to create a fast and reliable connection between users.`,
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
        Desc: `This is a sorting algorithm visualization web-application. This allows users to visualize the sorting process of various sorts like Merge-sort, Quick-sort, Insertion-sort, etc to facilitate easier understanding of working of sorts.`,
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
        Stack: ["ReactJs", "Node.Js", "Express", "Socket.io"]
    },
    {
        Title: "Todo List App",
        Desc: `This is a Full-Stack Todo List web application. Creating this application helped me learn the core basics of react and full stack development.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/React-Node.js-Express.js-Mysql-FullStack-TodoList-App",
        HasLink: true,
        Link: "http://todoapp.bhushankolhe.com/",
        OnShowcase: false,
        Stack: ["ReactJs", "Node.Js", "Express", "MySQL"]
    },
    {
        Title: "Portfolio V1",
        Desc: `This was my first protfolio back in 2019. This was also my first website published.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/Portfolio-v1",
        HasLink: true,
        Link: "http://version1.bhushankolhe.com/#ContactMe",
        OnShowcase: false,
        Stack: ["HTML", "CSS", "Javascript"]
    },
    {
        Title: "Weather-Widget",
        Desc: `This is a easy access web application to let users view weather of any city/area. Nuilding this helped me in learning about API communication in web applications.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/ReactJS-Weather-Widget",
        HasLink: true,
        Link: "http://www.weather-widget.bhushankolhe.com/",
        OnShowcase: false,
        Stack: ["React.Js", "Open Weather Map API"]
    },
    {
        Title: "Weather Widget Chrome Extension",
        Desc: `This is a easy access chrome extension to let users view weather of any city/area. Building helped me learn and understand the workings of chrome extensions.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/Weather-Widget_ChromeExtension",
        HasLink: false,
        Link: "",
        OnShowcase: false,
        Stack: ["HTML", "CSS", "Javascript", "Open Weather Map API"]
    },
    {
        Title: "Bollywood Quiz | Guess the movie names",
        Desc: `This is simple and fun movie quiz game made for Android devices.`,
        HasGit: false,
        GitLink: "",
        HasLink: true,
        Link: "https://play.google.com/store/apps/details?id=com.chocoholicstudio.bollywood",
        OnShowcase: false,
        Stack: ["C#", "Unity", "Python"]
    },
    {
        Title: "Maths | Series Puzzles Game",
        Desc: `This is simple and fun math quiz game made for Android devices.`,
        HasGit: false,
        GitLink: "",
        HasLink: true,
        Link: "https://play.google.com/store/apps/details?id=com.choholicstudio.mathsseries",
        OnShowcase: false,
        Stack: ["C#", "Unity"]
    },{
        Title: "Minesweeper.Ai",
        Desc: `An AI designed to learn to play minesweeper using neuralevolution and genetic algorithm. Created a neural network from scratch and used genetic algorithm in its learning process`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/MinesweeperNeuralEvolution",
        HasLink: false,
        Link: "",
        OnShowcase: false,
        Stack: ["Python"]
    }
    ,{
        Title: "To-Do App",
        Desc: `This is a simple To-Do desktop application with user authentication. Building this helped me learn UI development in Python using Kivy`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/ToDoApp",
        HasLink: false,
        Link: "",
        OnShowcase: false,
        Stack: ["Python", "Kivy", "MySQL", "React"]
    }
    ,{
        Title: "Blogging WebApp",
        Desc: `This web applications allows users to create profile, Post blogs, like, comment and follow other users Blogs etc. This was my first web application which taught me a lot about developing FrontEnd, BackEnd and thier communication process.`,
        HasGit: true,
        GitLink: "https://github.com/chocoholic-me/BloggingWebsite",
        HasLink: false,
        Link: "",
        OnShowcase: false,
        Stack: ["Node.Js", "Express", "MangoDB", "Sass"]
    },
    {
        Title: "Twin Gliders",
        Desc: `My first attempt at creating a android game using Unity. From developing to publishing this app, I learned the whole process of product development.`,
        HasGit: false,
        GitLink: "",
        HasLink: true,
        Link: "https://play.google.com/store/apps/details?id=com.ChocoholicStudio.TwinGlider",
        OnShowcase: false,
        Stack: ["C#", "Unity"]
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