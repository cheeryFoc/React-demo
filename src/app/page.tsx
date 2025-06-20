// "use client"; // 客户端组件声明

import Link from "next/link";
import Image from "next/image";
// 静态项目数据
const projects = [
  {
    id: "1",
    title: "pizzaMenu",
    description: "A pizza shop based on React.js",
    techStack: ["React", "TypeScript"],
    image: "/home/0.png",
    url: "/pizzaMenu"
  },
  {
    id: "2",
    title: "steps",
    description: "A steps button based on React.js",
    techStack: ["React", "TypeScript"],
    image: "/home/0.png",
    url: "/steps"
  },
  {
    id: "3",
    title: "travel - list",
    description: "A travel-list app based on React.js",
    techStack: ["React", "TypeScript"],
    image: "/home/0.png",
    url: "/travel"
  },
  {
    id: "99",
    title: "尽情期待",
    description: "轻量级应用，尽情期待",
    techStack: ["Next.js", "React", "Zustand"],
    image: "/home/0.png",
    url: "/"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">Demo Display</h1>
            {/* todo tools */}
            {/* <div className="hidden md:flex space-x-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`#${project.url}`}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {project.title}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </nav>

      {/* 项目列表 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.sort((a, b) => parseInt(a.id) - parseInt(b.id)).map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform"
            >
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              /> */}
              <Image
                src={project.image}
                alt={project.title}
                width={500} // 根据需要设置宽度
                height={200} // 根据需要设置高度
                className="object-cover"
                priority
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`${project.url}`}
                  className="text-blue-600 hover:underline inline-block"
                >
                  check the details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* 锚点定位区域 */}
      <div className="h-24" aria-hidden="true"></div>
    </div>
  );
}