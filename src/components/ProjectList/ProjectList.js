import "./ProjectList.scss";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { useGlobalContext } from "../../globalContext/context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProjectList({ projects = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects
    .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate()) // Sort by date
    .slice(indexOfFirstProject, indexOfLastProject);
    
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex justify-center mt-4 p-5 bg-blue overflow-hidden">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 py-1 px-3 rounded text-white ${
              currentPage === number ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#F5F7F8]">
        {projects.length === 0 && <p className="text-gray-600">No projects yet</p>}
        {/* Display projects based on pagination */}
        {currentProjects.map((project, index) => (
          <Link
            className={`max-w-sm rounded overflow-hidden shadow-lg p-5 ${
              index === 0 ? 'bg-[rgba(255,255,255,0.7)] text-gray-700' : 'bg-[#fffff] text-gray-700'
            }`}
            to={`/projects/${project.id}`}
            key={project.id}
          >
            <div className="mb-8">
              <h2 className="font-bold text-xl mb-2">
                {project.name}
              </h2>
              <p>
                By {project.createdBy.displayName}
              </p>
              
              <p>{project.details}</p>
              <h2>Assigned Users List:</h2>
              <p>{project.assignedUsersList ? project.assignedUsersList.length : 0} users</p>

              <p>Due by {project.createdAt.toDate().toDateString()}</p>
              {project.createdAt &&
                formatDistanceToNow(project.createdAt.toDate(), {
                  addSuffix: true,
                })}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProjectList;
