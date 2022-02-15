<template>
  <search-content>
    <title-text v-scroll="titleScroll">
      <span v-scroll="textScroll"> Don’t be late, aluxioner </span>
    </title-text>
    <search v-scroll="searchScroll">
      <div>
        <input
          v-model="stopId"
          type="number"
          placeholder="¿Cuál es tu parada?"
        />
        <label class="focus"> ¿Cuál es tu parada? </label>
        <NuxtLink :to="`/search/0?data=stopId&stopId=${stopId}`">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8504 17.1295L13.4557 12.7365C14.6418 11.3849 15.3626 9.6146 15.3626 7.67878C15.3626 3.44458 11.9164 1.56887e-07 7.68132 1.56887e-07C3.44543 -0.00084889 0 3.44458 0 7.67793C0 11.9113 3.44628 15.3567 7.68132 15.3567C9.6146 15.3567 11.3832 14.6384 12.7348 13.4557L17.1304 17.8495C17.2297 17.9497 17.3605 17.9989 17.4904 17.9989C17.6211 17.9989 17.751 17.9488 17.8504 17.8495C18.0499 17.6508 18.0499 17.3282 17.8504 17.1295ZM7.68132 14.3379C4.0075 14.3379 1.01886 11.3501 1.01886 7.67793C1.01886 4.0058 4.0075 1.01801 7.68132 1.01801C11.3551 1.01801 14.3438 4.0058 14.3438 7.67793C14.3438 11.3501 11.3551 14.3379 7.68132 14.3379Z"
              fill="#8993A4"
            />
          </svg>
        </NuxtLink>
      </div>
    </search>
  </search-content>
</template>

<script>
  import {
    SearchContent,
    TitleText,
    Search,
  } from '../styled-components/SearchSection';
  export default {
    name: 'SearchSection',
    components: {
      SearchContent,
      TitleText,
      Search,
    },
    data() {
      return {
        stopId: undefined,
      };
    },
    methods: {
      textScroll(_evt, el) {
        if (window.scrollY > 50) {
          el.setAttribute('style', 'font-size: 52px; line-height: 50px');
        }
        return window.scrollY > 100;
      },
      titleScroll(_evt, el) {
        if (window.scrollY > 50) {
          el.setAttribute('style', 'margin-top: 72px');
        }
        return window.scrollY > 100;
      },
      searchScroll(_evt, el) {
        if (window.scrollY > 50) {
          el.setAttribute('style', 'margin-top: 72px');
        }
        return window.scrollY > 100;
      },
    },
  };
</script>
