
// See More and See Less funtion for About Section
function toggleDescription() {
  var description = document.querySelector('.description');
    var readMoreLink = document.querySelector('.read-more-link');
    var readLessLink = document.querySelector('.read-less-link');
    
    description.classList.toggle('expanded');
    readMoreLink.style.display = description.classList.contains('expanded') ? 'none' : 'inline';
    readLessLink.style.display = description.classList.contains('expanded') ? 'inline' : 'none';
}