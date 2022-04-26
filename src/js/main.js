const branches = ['master', 'prodution', 'mordy']

function compareOptions(_branches) {
  return _branches.reduce((acc, cur) => {
    _branches.forEach(branch => {
      if (branch !== cur) acc.push([cur, branch])
    })
    return acc
  }, [])
}

function addSelectMenue() {
  const menuElement = document.querySelector('#repo-content-pjax-container .file-navigation');
  if (!menuElement || menuElement.querySelector('#compare-branches')) {
    return;
  }
console.log(location)
  const githubHtml =
    `<summary role="button" type="button" class="btn ml-2">
    <span class="d-none d-md-flex flex-items-center">
      Compare branches
      <span class="dropdown-caret ml-1"></span>
    </span>
    <span class="d-inline-block d-md-none">IDE</span>
  </summary>
  <div>
    <ul class="dropdown-menu dropdown-menu-sw" style="width: unset;">
      ${compareOptions(branches).map(item =>
      `<li data-toggle-for="compare-branches"><a href="${location.href}/compare/${item[0]}...${item[1]}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
        <span style="font-size: 12px;opacity:0.75;">base:</span> <span class="css-truncate css-truncate-target" data-menu-button="">${item[0]}</span>
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-arrow-left">
          <path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
        </svg>
        <span style="font-size: 12px;opacity:0.75;">compare:</span> <span class="css-truncate css-truncate-target" data-menu-button="">${item[1]}</span>
      </a></li>`
      ).join('')}
    </ul>
  </div> `;

  const detailsElement = document.createElement('details');
  detailsElement.setAttribute('class', 'details-overlay details-reset position-relative d-block');
  detailsElement.setAttribute('id', 'compare-branches');
  detailsElement.innerHTML = githubHtml;

  menuElement.appendChild(detailsElement);
}

addSelectMenue()
