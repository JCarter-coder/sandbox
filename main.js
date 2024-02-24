var findAllPeople = function(n, meetings, firstPerson) {
    // sort meetings by the time, i.e. meetings[element][2]
    meetings.sort((a, b) => a[2] - b[2]);
    let knowSecret = [0];
    let concurrentMeetings = {};
    let meetTime = meetings[0][2];
    //console.log(meetTime);
    //console.log(meetings);
    for (let i = 0; i < meetings.length; i++) {
        // if meetTime has changed
        if (meetings[i][2] !== meetTime) {
            // evaluate if anyone in concurrentMeetings
            // knows the secret 
            
            console.log(concurrentMeetings);
            // evaluate if secret is known by any in concurrentMeetings
                // if true, 
                    // push all people to the knowSecret list

                // empty concurrentMeetings and continue
            

            // if false (i.e. concurrentMeetings === [])
            
            // empty concurrentMeetings then add the new people
            concurrentMeetings = {};
            concurrentMeetings[meetings[i][0]] = 1;
            concurrentMeetings[meetings[i][1]] = 1;
            // update meetTime
            meetTime = meetings[i][2];
            console.log(`New meet time: ${meetings[i][2]} at iteration ${i}.`)
            
        }
        // else add people to concurrentMeetings
        else {
            console.log(`Meet time stayed the same at iteration ${i}.`)
            if (!concurrentMeetings[meetings[i][0]]) {
                concurrentMeetings[meetings[i][0]] = 1;
            }
            if (!concurrentMeetings[meetings[i][1]]) {
                concurrentMeetings[meetings[i][1]] = 1;
            }
        }

    }
    console.log(concurrentMeetings);
    // if secret is known by any in concurrentMeetings 
        // push all people to the knowSecret list
    // return an array of the people who know the secret
    console.log(knowSecret);
};

findAllPeople(6, [[1,2,5],[2,3,8],[1,5,10]], 1);
findAllPeople(4, [[3,1,3],[1,2,2],[0,3,3]], 3);
findAllPeople(5, [[3,4,2],[1,2,1],[2,3,1]], 1);

