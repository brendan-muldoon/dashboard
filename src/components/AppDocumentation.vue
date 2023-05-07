<template>
  <div class="container" style="min-height: 100%">
    <h2>Documentation</h2>
    <h4>
      <b
        >NOTE: The Log tool requires Java 11 and is currently only compatible
        with Spring Boot applications that use Maven.</b
      >
    </h4>
    <br />
    <br />
    <h4><u>Register Your Application</u></h4>
    <p>
      Firstly you will need to register your application. You can do so by
      registering it <a href="/register">here</a>. Ensure the name that you
      register matches exactly what is in your application.yml. Failure to
      complete either of these steps will result in logs not being correctly
      stored or being retrievable.
    </p>
    <h4><u>Maven Dependency</u></h4>
    <p>
      In your POM.xml, include the following in the dependency section:
      <code>
        <div class="code-container">
          <pre>
              <br />
              &lt;dependency&gt;
                &lt;groupId&gt;com.bt&lt;/groupId&gt;
                &lt;artifactId&gt;log-api-connector&lt;/artifactId&gt;
                &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
              &lt;/dependency&gt;
            </pre>
        </div>
      </code>
    </p>
    <br />

    <h4><u>Example Usage</u></h4>
    <p>
      Include the <code>LogApiConnector</code> interface as an attrubute in the
      class of your choice. Feel free to use <code>@Autowire</code> or
      constructor injection.
      <br />
      <br />

      Register the bean in your <code>AppConfig.class</code> or similar, like
      so:
      <code>
        <br />
        <br />

        @Bean
        <br />

        public LogApiConnector logApiConnector() {
        <br />

        &nbsp;&nbsp;return new LogApiConnectorImpl();
        <br />

        }
      </code>
      <br />
      <br />

      Now you can use the <code>.publishLogMessage()</code> method which accepts
      1 parameter, an <code>EventLog</code>. An <code>EventLog</code> object is
      comprised of 3 attributes:
      <br />
      <br />

      <code>"Application Name"</code> - The name of your application.
      <br />

      <code>"Message"</code> - The log message you wish to save.
      <br />

      <code>"Timestamp"</code> - The local date and time.
      <br />
      <br />
      Here's an example:
      <br />
      <br />
      <code>@Autowired</code>
      <br />

      <code>private final LogApiConnector connector;</code>
      <br />

      <br /><code>// constructor, getters, setters, etc</code>
      <br />
      <code>
        <br />

        public void someMethod() {
        <br />

        &nbsp;&nbsp;try { <br />
        &nbsp;&nbsp;} catch (Exception ex) {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connector.publishLogMessage( new
        EventLog("App Name", ex.getMessage(), LocalDateTime.now()));
        <br />&nbsp;&nbsp;}
        <br />

        }
      </code>
      <br />
      
    </p>
    <h4><u>Accessing Logs</u></h4>

    <p>
      In order to access your applications logs, enter your applcation name in the search bar above. If you recieve a network error message, then it's me, not you.
      And trust that I am working the problem. 
      <br/>
      <br/>
      However, if you recieve an error stating no logs could be found, then it's for one of two reasons. 1, you don't have any logs yet, or 2, you have not registered your app.
      <br/>
      <br/>
      
      If you have any questions, queries or concerns, you can reach me at brendan.muldoon@bt.com.
    </p>

    
  </div>
</template>

<script>
export default {
  name: "AppDocumentation",
};
</script>

<style scoped>
.code-container {
  color: black;
  max-width: 50%; /* Set the maximum width */
  margin: 0 auto; /* Center the container horizontally */
  background-color: #f5f5f5; /* Add a light gray background */
  padding: 10px; /* Add some padding to the container */
}
h4 {
  font-size: 1.25rem;
  margin-right: 10rem;
  margin-left: 10rem;
  text-align: left;
}

h2 {
  font-size: 2.5rem;
  padding-top: 50px;
  padding-bottom: 5rem;
  text-align: center;
}

p {
  font-size: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-right: 10rem;
  padding-left: 10rem;
  text-align: left;
}
</style>
