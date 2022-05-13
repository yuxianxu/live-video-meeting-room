let handleMemberJoined = async (MemberId) => {
  console.log('A new member joined the room:', MemberId);
  addMemberToDom(MemberId)
};

let addMemberToDom = async (MemberId) => {
    let memberWrapper = document.getElementById('member__list')
    let memberItem = `<div class="member__wrapper" id="member__${MemberId}__wrapper">
    <span class="green__icon"></span>
    <p class="member_name">${MemberId}</p>
</div>`

memberWrapper.insertAdjacentHTML('beforeend', memberItem)
}