/** Coding */
1. Unit Tests [WIP]
2. Refactor Code into Services [COMPLETED]

/** Features Web/Mobile */
1. /** Teleappointments */ 
    
    GET  /appointments
    POST /appointments
    PATCH /appointments
    GET  /appointments/:id
    DELETE /appointment/:id
    GET /therapists
    GET /therapists/:id
    GET /clients
    GET /clients/:id

2. /** Payments */

    GET /payments
    GET /payments/:id
    POST /payments ->  /create-payment-intent
    DELETE /payments/:id
    PATCH /payments/:id

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

    // admin panel routes pending //
    POST /signup
    POST /refresh-token
    POST /login
    GET /about/:id
    GET / 

6 /** Guided Journaling */

7 /** Routine Builder and Daily Tasks */

8 /** Rescue Session */

9 /** Teletherapy */

10 /** Video Diagnosis */

11 /** Content Reccomendation */

12 /** Automated Therapist Profile Marketing */

13 /** Admin Panel and Support */

14 /** AI Based Fitness and Sleep Tracker */



Route -> [Middleware -> Controller -> Service -> Model] -> MongoDB

Since we did not code route and mongoDB 
we assume they have good test cases
and are thoroughly tested. Only the 
square bracket parts is to be tested