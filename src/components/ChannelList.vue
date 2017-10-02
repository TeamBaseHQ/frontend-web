<template>
  <div class="channel-list">
    <aside class="menu">
      <p class="menu-label">
        Channels
      </p>
      <ul class="menu-list">
        <li class="channel-item">
          <a class="channel-link">
            <span class="channel-color tag is-highlight"></span>
            <span class="channel-label">design</span>
          </a>
        </li>
        <li class="channel-item">
          <a class="channel-link">
            <span class="channel-color tag is-info"></span>
            <span class="channel-label">development</span>
          </a>
        </li>
        <li class="channel-item">
          <a class="channel-link">
            <span class="channel-color tag is-warning"></span>
            <span class="channel-label">general</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'channel-list',
  };
</script>
