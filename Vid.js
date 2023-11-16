

        var video = document.getElementById("myVideo");

        var controls = document.getElementById("videoControls");

        var playPauseButton = document.getElementById("playPauseButton");

        var timeDisplay = document.getElementById("timeDisplay");

        var likeCountDisplay = document.getElementById("likeCount");

        var heartIcon = document.getElementById("heartIcon");

        var isPageVisible = true;

        var likeCount = parseInt(localStorage.getItem('likeCount')) || 0;

        likeCountDisplay.textContent = likeCount;

        function toggleControls() {

            if (video.paused) {

                controls.style.display = "flex";

            } else {

                controls.style.display = (controls.style.display === "none") ? "flex" : "none";

            }

        }

        function togglePlayPause() {

            if (video.paused) {

                video.play();

                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';

                setTimeout(function () {

                    controls.style.display = "none";

                }, 2000);

                setInterval(updateVideoTime, 1000);

            } else {

                video.pause();

                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';

            }

        }

        function updateVideoTime() {

            var currentTime = isFinite(video.currentTime) ? formatTime(video.currentTime) : "0:00";

            var duration = isFinite(video.duration) ? formatTime(video.duration) : "0:00";

            timeDisplay.textContent = currentTime + " / " + duration;

        }

        function formatTime(time) {

            var minutes = Math.floor(time / 60);

            var seconds = Math.floor(time % 60);

            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return minutes + ":" + seconds;

        }

        function toggleHeart() {

            if (heartIcon.style.color === 'red') {

                heartIcon.style.color = 'blue';

                likeCount++;

                likeCountDisplay.textContent = likeCount;

                localStorage.setItem('likeCount', likeCount);

            } else {

                heartIcon.style.color = 'red';

                likeCount--;

                likeCountDisplay.textContent = likeCount;

                localStorage.setItem('likeCount', likeCount);

            }

            heartIcon.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7)';

            setTimeout(function () {

                heartIcon.style.textShadow = 'none';

            }, 500);

        }

        function handleBaratagClick() {

            alert('برتاج!');

        }

        document.addEventListener("visibilitychange", function () {

            if (document.hidden) {

                if (!video.paused) {

                    video.pause();

                    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';

                }

                isPageVisible = false;

            } else {

                if (!video.paused && !isPageVisible) {

                    video.play();

                    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';

                }

                isPageVisible = true;

            }

        });

        

    
