export const DATA_STORE: Record<string, string> = {
  "projects.txt": "__RENDER_PROJECTS_SECTION__",

  "tech_stack.json": "__RENDER_TECH_STACK__",

  "help.txt": `Available commands:\n - ls : list files\n - cat <file> : print file contents\n - clear : clear the terminal\n - help : show this help\n - whoami : show the user identity`,

  "welcome.txt": "Welcome to Abhinandan's terminal portfolio."
  
};

export const FILE_LIST = Object.keys(DATA_STORE);

export default DATA_STORE;
