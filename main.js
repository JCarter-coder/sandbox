var mostBooked = function(n, meetings) {
    //console.log(meetings);
    let roomAvailabilityTime = [];
    let meetingCount = [];
    for (let a = 0; a < n; a++) {
        roomAvailabilityTime.push(0);
        meetingCount.push(0);
    }
    meetings.sort((a,b) => a[0] - b[0]);
    for (let meeting of meetings) {
        let start = meeting[0];
        let end = meeting[1];
        let minRoomAvailabilityTime = Infinity;
        let minAvailableTimeRoom = 0;
        let foundUnusedRoom = false;

        for (let i = 0; i < n; i++) {
            if (roomAvailabilityTime[i] <= start) {
                foundUnusedRoom = true;
                meetingCount[i]++;
                roomAvailabilityTime[i] = end;
                break;
            }

            if (minRoomAvailabilityTime > roomAvailabilityTime[i]) {
                minRoomAvailabilityTime = roomAvailabilityTime[i];
                minAvailableTimeRoom = i;
            }
        }

        if (!foundUnusedRoom) {
            roomAvailabilityTime[minAvailableTimeRoom] += end - start;
            meetingCount[minAvailableTimeRoom]++;
        }
    }
    let maxMeetingCount = 0;
    let maxMeetingCountRoom = 0;
    for (let j = 0; j < n; j++) {
        if (meetingCount[j] > maxMeetingCount) {
            maxMeetingCount = meetingCount[j];
            maxMeetingCountRoom = j;
        }
    }

    console.log(maxMeetingCountRoom);
};

mostBooked(2,[[0,10],[1,5],[2,7],[3,4]]);
mostBooked(3,[[1,20],[2,10],[3,5],[4,9],[6,8]]);


