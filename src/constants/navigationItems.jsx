import { BookOpenText, LayoutGrid, SquareUser } from "lucide-react";

import { MessageSquareMore } from "lucide-react";
import { Settings } from "lucide-react";

const navigationItems = [
  {
    id: "Overview",
    icon: <LayoutGrid />,
    label: "Overview",
    route: "/overview",
  },
  {
    id: "Task",
    icon: <BookOpenText />,
    label: "Task",
    route: "/task",
  },
  {
    id: "Mentors",
    icon: <SquareUser />,
    label: "Mentors",
    route: "/mentors",
  },
  {
    id: "Message",
    icon: <MessageSquareMore />,
    label: "Message",
    route: "/message",
  },
  {
    id: "Settings",
    icon: <Settings />,
    label: "Settings",
    route: "/settings",
  },
];

export default navigationItems;
