import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
      @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
      background-color: ${({ theme }) => theme.body};
      font-family: 'Josefin Sans', sans-serif;
      transition: all .50s linear;
    }
    
    #header {
      color: ${({ theme }) => theme.header};
    }
    
    #input-todo {
      background-color: ${({ theme }) => theme.todoBackground};
    }
    
    #input-todo input[type="text"] {
      background-color: ${({ theme }) => theme.todoBackground};
      color: ${({ theme }) => theme.todoText};
    }
    
    #input-todo form ::placeholder {
      color: ${({ theme }) => theme.todoText};
    }
    
    #display-todos {
      background-color: ${({ theme }) => theme.todoBackground};
      color: ${({ theme }) => theme.todoText};
    }
    
    #filtered-container {
      color: ${({ theme }) => theme.filterContainerText};
    }
    
    #filter-buttons p:hover, #filter-buttons + p:hover {
      color: ${({ theme }) => theme.hoverText};
    }
    
    #each-todo {
      border-bottom: ${({ theme }) => theme.eachTodoBorder};
    }
    
    #each-todo .todo-completed {
      color: ${({ theme }) => theme.todoCompleted};
    }
`;
