import React from 'react';
import { FaGithub } from 'react-icons/fa';


const GitHubButton = ({ username, repository }) => {
  const githubUrl = `https://github.com/${username}/${repository}`;

  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
      <FaGithub /> Repository
    </a>
  );
};

export default GitHubButton;