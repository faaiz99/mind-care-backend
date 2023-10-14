/\*_ Coding _/

1. Unit Tests [WIP]

/\*_ Features Web/Mobile _/

1. /\*_ Teleappointments _/

   /\*_Client _/
   GET /appointments-client/:id
   POST /appointments
   PATCH /appointments
   GET /appointments/:id
   DELETE /appointment/:id
   GET /therapists
   GET /therapists/:id

   /\*_Therapist _/
   GET /appointments-therapist/:id
   PATCH /appointments-therapist/:id
   PATCH /therapist-review/:id
   GET /therapist-review/:id
   PATCH /session-notes/:id

2. /\*_ Payments _/

   /\*_Client _/

   POST /payments
   PATCH /payments
   GET /client-payments/
   GET /client-payments/:id
   DELETE /payments/:id
   GET /payments-confirm/:id
   POST /payments-save

   /\*_ Therpist _/

   GET /payments-therapist/:id
   GET /payments-therapist

3. /\*_ Psychological Profile _/

   GET /psychological-profile
   POST /psychological-profile
   GET /psychological-profile/:id
   PATCH /psychological-profile/:id
   DELETE /psychological-profile/:id

   POST /anxiety-test/:id
   GET /anxiety-test/:id
   POST /depression-test/:id
   GET /depression-test/:id

   // Inventory Tests with Answers

4. /\*_ Community Forum _/

   /\*_ POSTS _/

   GET /posts
   POST /posts
   GET /posts/:id
   PATCH /posts/:id
   DELETE /posts/:id
   POST /report-ports/:id
   POST /upvote-post/:id
   POST /downvote-post/:id

   /\*_ COMMENTS _/

   GET /comments
   POST /comments
   POST /reply-to-comment
   PATCH /comments/:id
   DELETE /comments/:id
   POST /report-comments/:id
   POST /upvote-comments/:id
   POST /downvote-comments/:id

5. /\*_ Profile _/

   /\*_ CLIENT _/

   POST /signup
   POST /login
   POST /verify/:token
   POST /send-verification-email
   POST /refresh-token
   POST /reset-password
   POST /password/:token
   GET /about/:id
   GET /

   /\*_ THERAPIST _/

   POST /signup
   POST /login
   POST /verify/:token
   POST /send-verification-email
   POST /refresh-token
   POST /reset-password
   POST /change-password
   POST /password/:token
   GET /about/:id
   GET /

   /\*_ ADMIN _/

   // admin panel routes in admin support //
   POST /signup
   POST /refresh-token
   POST /login
   GET /about/:id
   GET /

6. /\*_ Guided Journaling _/

   // clientId -> cid
   // journalId -> id

   GET /journals/:cid
   GET /journalName/:id
   POST /journalName/:cid
   DELETE /journalName/:id

7. /\*_ Routine Builder and Daily Tasks _/

   // clientId -> cid
   // journalId -> id

   GET /reminders/:cid
   GET /reminders/:id/:cid
   POST /reminders/:cid
   DELETE /reminder/:id
   PATCH /reminder/:id

8. /\*_ Rescue Session _/

9. /\*_ Teletherapy _/

   /send-message
   /get-user-chats
   /find-chats

10. /\*_ Video Diagnosis _/

11. /\*_ Content Reccomendation _/

    GET /suggest-rescue-sessions
    GET /suggest-learning-paths
    GET /suggest-guided-journals
    GET /forum-posts
    GET /feature-therapists

    // Community Forum Routes Pending //

12. /\*_ Automated Therapist Profile Marketing _/

13. /\*_ Admin Panel and Support _/

    GET /reported-posts
    GET /reported-comments
    GET /reported-accounts

    POST /reported-post/:id
    POST /reported-comment/:id
    POST /reported-accounts/:id

    DELETE /remove-posts/:id
    DELETE /remove-comment/:id
    DELETE /remove-account/:id

    POST /reported-post/:id

    PATCH /ban-user/:id

    GET /account-appeals

    POST /issue-warning/:id

    GET /message

    POST /message/:cid [chat id]

    GET /forum-posts
    GET /platform-signups

14. /\*_ Fitness and Sleep Tracker _/

Route -> [Middleware -> Controller -> Service -> Model] -> MongoDB

https://www.npmjs.com/package/express-mongo-sanitize
https://www.npmjs.com/package/express-rate-limit
https://www.npmjs.com/package/express-validator
