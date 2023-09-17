/** Coding */
1. Unit Tests [WIP]
2. Refactor Code into Services [COMPLETED]


/** Features Web/Mobile */
1. /** Teleappointments */ 
    

    /**Client */
    GET  /appointments-client/:id
    POST /appointments
    PATCH /appointments
    GET  /appointments/:id
    DELETE /appointment/:id
    GET /therapists
    GET /therapists/:id

    /**Therapist */
    GET /appointments-therapist/:id

2. /** Payments */

    /**Client */

    POST /payments ->  /create-payment-intent
    PATCH /payments
    GET /client-payments/
    GET /client-payments/:id
    DELETE /payments/:id
    GET /payments-confirm/:id
    POST /payments-save 

    /** Therpist */

    GET /payments-therapist/:id
    GET /payments-therapist

3. /** Psychological Profile */ 

    GET /psychological-profile
    POST /psychological-profile
    GET /psychological-profile/:id
    PATCH /psychological-profile/:id
    DELETE /psychological-profile/:id
    

    // Inventory Tests with Answers

4. /** Community Forum */ 
    
    /** POSTS */
    
    GET /posts
    POST /posts
    GET /posts/:id
    PATCH /posts/:id
    DELETE /posts/:id
    POST /report-ports/:id
    POST /upvote-post/:id
    POST /downvote-post/:id 

    /** COMMENTS */
    
    GET /comments
    POST /comments
    POST /reply-to-comment
    PATCH /comments/:id
    DELETE /comments/:id
    POST /report-comments/:id
    POST /upvote-comments/:id
    POST /downvote-comments/:id

5. /** Profile */  

    /** CLIENT */

    POST /signup
    POST /login
    POST /verify/:token
    POST /send-verification-email
    POST /refresh-token
    POST /reset-password
    POST /password/:token
    GET /about/:id
    GET /

    /** THERAPIST */

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
    

    /** ADMIN */

    // admin panel routes in admin support //
    POST /signup
    POST /refresh-token
    POST /login
    GET /about/:id
    GET / 

6.  /** Guided Journaling */

    // clientId -> cid
    // journalId -> id

    GET /journals/:cid
    // <! there is no need of 
    GET /journalName/:id 
    POST /journalName/:cid
    DELETE /journalName/:id


7. /** Routine Builder and Daily Tasks */

    // clientId -> cid
    // journalId -> id

    GET  /reminders/:cid
    GET  /reminders/:id/:cid
    POST /reminders/:cid
    DELETE /reminder/:id
    PATCH /reminder/:id


8. /** Rescue Session */

9. /** Teletherapy */

    /send-message
    /get-user-chats
    /find-chats
    

10. /** Video Diagnosis */

11. /** Content Reccomendation */

    GET /suggest-rescue-sessions
    GET /suggest-learning-paths
    GET /suggest-guided-journals
    GET /forum-posts
    GET /feature-therapists

    // Community Forum Routes Pending //


12. /** Automated Therapist Profile Marketing */

13. /** Admin Panel and Support */

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

14. /** Fitness and Sleep Tracker */

    


Route -> [Middleware -> Controller -> Service -> Model] -> MongoDB

Since we did not code route and mongoDB 
we assume they have good test cases
and are thoroughly tested. Only the 
square bracket parts is to be tested



https://www.npmjs.com/package/express-mongo-sanitize
https://www.npmjs.com/package/express-rate-limit
https://www.npmjs.com/package/express-validator