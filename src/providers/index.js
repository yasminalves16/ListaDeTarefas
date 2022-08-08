import { TasksProvider } from "./tasks";

const Providers = ({ children }) => {
  return (
      <TasksProvider>{children}</TasksProvider>
  );
};

export default Providers;