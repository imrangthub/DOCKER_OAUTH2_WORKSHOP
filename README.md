# DOCKER_OAUTH2_WORKSHOP
Docker with OAuth2

#Spring Boot micriservice with Spring Security and OAuth2 InMemory user credentials and client Info


#USER CREDENTIALS
-----------------

USER:
----

username:user

password:user


ADMIN:
-----

username:admin

password:admin


 #AP
----

Authorization Server api
------------------------

http://localhost:8181/oauth/token                      // FOR ALL

http://localhost:8181/home                             // FOR ALL

http://localhost:8181/authorization-server-admin/info  // FOR ROLE_ADMIN

http://localhost:8181/authorization-server-user/info   // FOR ROLE_ADMIN, ROLE_USER


Resource Server api
--------------------

http://localhost:8282/home                             // FOR ALL

http://localhost:8282/authorization-server-admin/info  // FOR ROLE_ADMIN

http://localhost:8282/authorization-server-user/info   // FOR ROLE_ADMIN, ROLE_USER



#DOCKER INFO
------------

=>docker image build -t imranmadbar/oauth2-resource-server-api:1.0.0.RELEASE .
=>docker image build -t imranmadbar/oauth2-authorization-server-api:1.0.0.RELEASE .


=>docker network create oauth2-app-net
(Default bridge)



=>docker run --network oauth2-app-net -d -p 3306:3306 --name=spring-boot-mysql-oauth2-db --env="MYSQL_ROOT_PASSWORD=root" --env="MYSQL_DATABASE=mysqloauth2db" -it mysql:5.7

=>source  D:/DOCKER_OAUTH2_WORKSHOP/GRANT_TYPE_PASSWORD/authorization-server-api/src/main/resources/spring_boot_oauth2_db.sql

=>docker run --network oauth2-app-net --name oauth2-authorization-server-api -t --link spring-boot-mysql-oauth2-db:spring-boot-mysql-oauth2-db -p 8181:8081 imranmadbar/oauth2-authorization-server-api:1.0.0.RELEASE

=>docker run --network oauth2-app-net --name oauth2-resource-server-api -t --link spring-boot-mysql-oauth2-db:spring-boot-mysql-oauth2-db -p 8282:8082 imranmadbar/oauth2-resource-server-api:1.0.0.RELEASE





#OAUTH2 INFO
---------------


1) Need to send Registered Client Info as in header section on oauth token request 

End-point: 

http://localhost:8081/oauth/token
Method:POST

#Authorization Section:
---------------------------------------------------
In Authorization Section set client id and password

Username: imranmadbarClientAppId
Password: appSecret

Then click Update Request Btn

OR
==

#Headers Section
--------------------------------
Add the info In Headers(base64):

Authorization:Basic aW1yYW5tYWRiYXJDbGllbnRBcHBJZDphcHBTZWNyZXQ=


2) Add grant_type, user credentials and client id on Post Request Body Section

#Headers Section
--------------------------------
Add the info In body(key-value):

grant_type:password
username:admin
password:123456
client_id:imranmadbarClientAppId

--/ Then Send the Request

#Token Response may like this:
------------------------------
{
    "access_token": "757dc48c-3bbe-4a4d-901e-30a45e7143f0",
    "token_type": "bearer",
    "expires_in": 27987,
    "scope": "read write"
}




#Get Resource Using Token 
--------------------------

End-point:http://localhost:8082/admin/list


#Headers Section
--------------------------------
Add the info In Headers(key-value):

Authorization:Bearer 757dc48c-3bbe-4a4d-901e-30a45e7143f0
Content-Type:application/json
 



#DATABASE INFO
----------------


#Create OAuth2 schema tables

oauth_client_details

---------------------

    drop table if exists oauth_client_details;
    create table oauth_client_details (
        client_id VARCHAR(255) PRIMARY KEY,
        resource_ids VARCHAR(255),
        client_secret VARCHAR(255),
        scope VARCHAR(255),
        authorized_grant_types VARCHAR(255),
        web_server_redirect_uri VARCHAR(255),
        authorities VARCHAR(255),
        access_token_validity INTEGER,
        refresh_token_validity INTEGER,
        additional_information VARCHAR(4096),
        autoapprove VARCHAR(255)
      );

oauth_client_token

------------------

    create table if not exists oauth_client_token (
        token_id VARCHAR(255),
        token LONG VARBINARY,
        authentication_id VARCHAR(255) PRIMARY KEY,
        user_name VARCHAR(255),
        client_id VARCHAR(255)
      );

oauth_access_token

------------------

     create table if not exists oauth_access_token (
         token_id VARCHAR(255),
         token LONG VARBINARY,
         authentication_id VARCHAR(255) PRIMARY KEY,
         user_name VARCHAR(255),
         client_id VARCHAR(255),
         authentication LONG VARBINARY,
         refresh_token VARCHAR(255)
       );

oauth_refresh_token

-------------------

    create table if not exists oauth_refresh_token (
        token_id VARCHAR(255),
        token LONG VARBINARY,
        authentication LONG VARBINARY
      );


exists oauth_code

-----------------

    create table if not exists oauth_code (
        code VARCHAR(255), authentication LONG VARBINARY
      );


oauth_approvals

--------------

    create table if not exists oauth_approvals (
       userId VARCHAR(255),
       clientId VARCHAR(255),
       scope VARCHAR(255),
       status VARCHAR(10),
       expiresAt TIMESTAMP,
       lastModifiedAt TIMESTAMP
      );

ClientDetails 

-------------

     create table if not exists ClientDetails (
         appId VARCHAR(255) PRIMARY KEY,
         resourceIds VARCHAR(255),
         appSecret VARCHAR(255),
         scope VARCHAR(255),
         grantTypes VARCHAR(255),
         redirectUrl VARCHAR(255),
         authorities VARCHAR(255),
         access_token_validity INTEGER,
         refresh_token_validity INTEGER,
         additionalInformation VARCHAR(4096),
         autoApproveScopes VARCHAR(255)
       );

  
  
#Data
------
  
 OAuth2 Related 
 
 Client Info 
 
-----------------------------------------------

       INSERT INTO oauth_client_details
       (`client_id`, `client_secret`, `scope`, `authorized_grant_types`, `access_token_validity`, `refresh_token_validity`, `autoapprove`) 
       VALUES 
       ('imranmadbarClientAppId', 'appSecret', 'imranmadbar,med,read,write', 'password,authorization_code,refresh_token', '36000', '36000', '1');


Spring Security Related

Add User

--------------------------------------------------

      INSERT INTO users_tbl(`id`, `email`, `full_name`, `password`, `username`) VALUES ('1', 'imran@gmail.com', 'MD IMRAN HOSSAIN', '123456', 'admin');

Add Role

--------------------------------------------------
     INSERT INTO roles_tbl (`id`, `description`, `is_deleted`, `name`) VALUES ('1', 'For admin user', '0', 'ROLE_ADMIN');


#Mape User and Role

--------------------------------------------------
     INSERT INTO users_roles_tbl (`user_id`, `role_id`) VALUES ('1', '1');



Hibernate Query

-----------------------

Hibernate: 
    
    create table hibernate_sequence (
       next_val bigint
    ) engine=InnoDB
Hibernate: 
    
    insert into hibernate_sequence values ( 1 )
Hibernate: 
    
    insert into hibernate_sequence values ( 1 )
Hibernate: 
    
    create table roles_tbl (
       id bigint not null,
        description varchar(255),
        is_deleted boolean default false not null,
        name varchar(255),
        primary key (id)
    ) engine=InnoDB
Hibernate: 
    
    create table users_roles_tbl (
       user_id bigint not null,
        role_id bigint not null
    ) engine=InnoDB
Hibernate: 
    
    create table users_tbl (
       id bigint not null,
        full_name varchar(255),
        password varchar(255),
        username varchar(255),
        primary key (id)
    ) engine=InnoDB
Hibernate: 
    
    alter table users_tbl 
       drop index UK_7p2qdaqmxojhma31lopxr6gqx
Hibernate: 
    
    alter table users_tbl 
       add constraint UK_7p2qdaqmxojhma31lopxr6gqx unique (username)
Hibernate: 
    
    alter table users_roles_tbl 
       add constraint FKec55svjjqvr2r098g415jqrpp 
       foreign key (role_id) 
       references roles_tbl (id)
Hibernate: 
    
    alter table users_roles_tbl 
       add constraint FK16ne3yb5jx0r56xxmb5bp6d82 
       foreign key (user_id) 
       references users_tbl (id)


//======================================
