import { auth, onAuthStateChanged, signOut } from "./config.js";

window.logOut = ()=>{

    signOut(auth).then(() => {
        console.log("Logout ho chuka ha")
        window.location.href = "./login.html"
  // Sign-out successful.
}).catch((error) => {
    console.log(error , "error aa gya ha")
  // An error happened.
});

}

function getUser(){
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("User Login ha abhi" , user)
    // ...
  } else {
    // User is signed out
    console.log("User Login nhi ha")
    window.location.href = "./login.html"
    
    // ...
  }
});
}

getUser()


///Dashboard js

    // Simple in-memory posts data
    // const posts = [
    //   {
    //     id: 1,
    //     author: 'Sara Khan',
    //     avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    //     time: '2 hrs',
    //     text: 'Just finished a new project! Feeling proud 😄',
    //     image: 'https://images.unsplash.com/photo-1506898661809-6f6c2b19f48b?w=800&q=80',
    //     likes: 8,
    //     comments: 3,
    //     liked: false
    //   },
    //   {
    //     id: 2,
    //     author: 'Ali Raza',
    //     avatar: 'https://images.unsplash.com/photo-1545996124-1b2a1a1a5f4d?w=200&q=80',
    //     time: '5 hrs',
    //     text: 'Sunset at Clifton — Karachi has the best colors.',
    //     image: '',
    //     likes: 5,
    //     comments: 1,
    //     liked: false
    //   }
    // ];

    // const postsContainer = document.getElementById('postsContainer');

    // function renderPosts(filter = '') {
    //   postsContainer.innerHTML = '';
    //   const filtered = posts.filter(p => p.text.toLowerCase().includes(filter.toLowerCase()));

    //   filtered.forEach(p => {
    //     const article = document.createElement('article');
    //     article.className = 'bg-white rounded-lg shadow mb-6 p-4';
    //     article.innerHTML = `
    //       <div class="flex items-start gap-3">
    //         <img src="${p.avatar}" alt="author" class="h-10 w-10 rounded-full object-cover" />
    //         <div class="flex-1">
    //           <div class="flex items-center justify-between">
    //             <div>
    //               <div class="font-semibold">${p.author}</div>
    //               <div class="text-xs text-gray-500">${p.time}</div>
    //             </div>
    //             <div class="text-gray-400">...</div>
    //           </div>

    //           <p class="mt-3 text-sm">${escapeHtml(p.text)}</p>

    //           ${p.image ? `
    //             <div class="mt-3 rounded overflow-hidden">
    //               <img src="${p.image}" alt="post" class="w-full h-56 object-cover rounded" />
    //             </div>
    //           ` : ''}

    //           <div class="mt-3 flex items-center justify-between text-sm text-gray-600">
    //             <div class="flex items-center gap-4">
    //               <button data-action="like" data-id="${p.id}" class="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-50">👍 Like <span class="ml-1">${p.likes}</span></button>
    //               <button data-action="comment" data-id="${p.id}" class="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-50">💬 Comment</button>
    //               <button data-action="share" data-id="${p.id}" class="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-50">↗ Share</button>
    //             </div>
    //             <div class="text-xs">${p.comments} comments</div>
    //           </div>
    //         </div>
    //       </div>
    //     `;

    //     postsContainer.appendChild(article);
    //   });
    // }

    // // Utility to escape HTML in posts
    // function escapeHtml(unsafe) {
    //   return unsafe
    //     .replace(/&/g, '&amp;')
    //     .replace(/</g, '&lt;')
    //     .replace(/>/g, '&gt;')
    //     .replace(/\"/g, '&quot;')
    //     .replace(/\'/g, '&#039;');
    // }

    // // Event delegation for post actions
    // postsContainer.addEventListener('click', (e) => {
    //   const btn = e.target.closest('button');
    //   if (!btn) return;
    //   const action = btn.dataset.action;
    //   const id = Number(btn.dataset.id);
    //   const post = posts.find(p => p.id === id);
    //   if (!post) return;

    //   if (action === 'like') {
    //     post.liked = !post.liked;
    //     post.likes += post.liked ? 1 : -1;
    //     renderPosts(document.getElementById('searchInput').value);
    //   } else if (action === 'comment') {
    //     const reply = prompt('Write a comment:');
    //     if (reply) {
    //       post.comments += 1;
    //       alert('Comment added (demo).');
    //       renderPosts(document.getElementById('searchInput').value);
    //     }
    //   } else if (action === 'share') {
    //     alert('Post shared (demo).');
    //   }
    // });

    // // Posting new content (supports optional image preview via FileReader)
    // document.getElementById('postBtn').addEventListener('click', () => {
    //   const text = document.getElementById('postText').value.trim();
    //   const imageInput = document.getElementById('postImageInput');

    //   if (!text && !imageInput.files.length) {
    //     alert('Please write something or select an image.');
    //     return;
    //   }

    //   if (imageInput.files.length) {
    //     const file = imageInput.files[0];
    //     const reader = new FileReader();
    //     reader.onload = function(ev) {
    //       addPost(text, ev.target.result);
    //     }
    //     reader.readAsDataURL(file);
    //   } else {
    //     addPost(text, '');
    //   }

    //   // reset
    //   document.getElementById('postText').value = '';
    //   imageInput.value = '';
    // });

    // function addPost(text, imageData) {
    //   const newPost = {
    //     id: Date.now(),
    //     author: 'You',
    //     avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80',
    //     time: 'just now',
    //     text,
    //     image: imageData,
    //     likes: 0,
    //     comments: 0,
    //     liked: false
    //   };
    //   posts.unshift(newPost);
    //   renderPosts(document.getElementById('searchInput').value);
    // }

    // // Simple search
    // document.getElementById('searchInput').addEventListener('input', (e) => {
    //   renderPosts(e.target.value);
    // });

    // // Initial render
    // renderPosts();