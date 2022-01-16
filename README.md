# node-message-queue

Nodjs Message Queue Implementation using Redis, Bull along with some message queue service Appache Kafka

--

### Implementing message queue system using Redis and Bull npm library

Example:
To count number of api hit made by the user

Steps:

1. Create message queue calles API_QUEUE to handle the count operation (You can also design queue to make more complex operation).
2. Create middleware to add the job to api queue to increase the count of request.
3. Worker will accept the job and will start processing (Increases the count of api call)
   You can also do more complex operation like sending millions of push notification to users based on the events

### Message queue system using Appache Kafka

Appache Kafka is event streaming platform.

1. To publish (write) and subscribe to (read) streams of events, including continuous import/export of your data from other systems.
2. To store streams of events durably and reliably for as long as you want.
3. To process streams of events as they occur or retrospectively.
