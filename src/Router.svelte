<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import Overlay from "./routes/Overlay.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/overlay" component={Overlay} />
</Router>

<style>
</style>
