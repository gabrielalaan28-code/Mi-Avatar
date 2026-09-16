const avatarImg = document.getElementById('avatar-img');
const avatarStatus = document.getElementById('avatar-status');

avatarImg.addEventListener('click', () => {
  avatarImg.style.transform = 'scale(1.1)';
  setTimeout(() => {
    avatarImg.style.transform = 'scale(1.0)';
  }, 150);
});

avatarImg.addEventListener('error', () => {
  avatarImg.hidden = true;
  avatarStatus.hidden = false;
});
