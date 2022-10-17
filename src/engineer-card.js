const engineerCard = (profile) => `
  <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
      <p class="h3">${profile.getName()}</p>
      <p class="h4">
        <i class="fas fa-glasses mr-1"></i>
        ${profile.getRole()}
      </p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="font-weight-bold">ID: </span>
          ${profile.getID()}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">Email: </span>
          <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">GitHub: </span>
          <a href="http://www.github.com/${profile.getGithub()}">${profile.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = engineerCard;
