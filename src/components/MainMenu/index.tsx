import {
  DesktopOutlined,
  FileOutlined,
  FireFilled,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { Children, useState } from "react";
import type { MenuProps } from "antd";
import { useNavigate ,useLocation} from "react-router-dom";
import { Menu } from "antd";
import path from "path";

type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem("Option 1", "/page1", <PieChartOutlined />),
//     getItem("Option 2", "/page2", <DesktopOutlined />),
//     getItem("User", "page3", <UserOutlined />, [
//       getItem("Tom", "/page4"),
//       getItem("Bill", "/page5"),
//       getItem("Alex", "/page6"),
//     ]),
//     getItem("Team", "page4", <TeamOutlined />, [
//       getItem("Team 1", "6"),
//       getItem("Team 2", "7"),
//     ]),
//     getItem("Files", "9", <FileOutlined />),
//   ];

const items: MenuItem[] = [
  {
    label: "栏目 1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "栏目 2",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "栏目 3",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      { label: "Tom", key: "/page3/page301" },
      { label: "Bill", key: "/page3/page302" },
      { label: "Alex", key: "/page3/page303" },
    ],
  },
  {
    label: "栏目 4",
    key: "page4",
    icon: <TeamOutlined />,
    children: [
      { label: "Team 1", key: "/page4/page401" },
      { label: "Team 2", key: "/page4/page402" },
    ],
  },
];

const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  console.log(currentRoute.pathname);
  

  const menuClick = (e: { key: string }) => {
    // console.log("点击了菜单", e.key);

    navigateTo(e.key);
  };



let firstOpenKey :string  ="";
function findKey(obj:{key:string}){
        return (obj.key === currentRoute.pathname    )
}

for (let i = 0; i < items.length; i++) {
  if( items[i]!["children"] && items[i]!["children"].length>0 && items[i]!["children"].find(findKey)){
    firstOpenKey= items[i]!.key as string ;
    break;
  }
    
}



// items.find(findKey)
// 者结果如果找到拿到的是对象  转布尔值就是true


  //设置展开项的初始值   
  const [openKeys, setOpenKeys] = useState<string[]>([firstOpenKey]);
  const handleOpenChange = (keys: string[]) => {
    // keys 是一个数组，纪录当前哪一项是展开的

    setOpenKeys([keys[keys.length - 1]]);
    // console.log(keys);
  };

  return (
    <Menu
      theme="dark"
    //   表示当前样式
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      // items 就是菜单里的数据
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      // 当前展开项的数组
      openKeys={openKeys}
    />
  );
};

export default Comp;
