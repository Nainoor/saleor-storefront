import { styled } from "@styles";

export const Content = styled.div`
  .ce-block__content {
    max-width: 100%;
  }

  h1 {
    font-size: 4rem;
    // padding: 1em 0;
    margin: 0;
    line-height: 1.5em;
    outline: none;
    margin-bottom: 0;
    padding-bottom: 0.8rem;
  }

  h2 {
    font-size: 2.5rem;
    // padding: 1em 0;
    margin: 0;
    line-height: 1.5em;
    outline: none;
    margin-bottom: 0;
    padding-bottom: 0.8rem;
  }

  h3 {
    font-size: 1.5rem;
    // padding: 1em 0;
    margin: 0;
    line-height: 1.5em;
    outline: none;
    margin-bottom: 0;
    padding-bottom: 0.8rem;
  }

  p {
    line-height: 1.6em;
    outline: none;
    padding: 0.4em 0;
  }

  b {
    font-weight: 600;
  }

  i {
    font-style: italic;
  }

  ol,
  ul {
    margin: 1rem auto;
    padding-left: 0;
    font-size: 1.125rem;
    line-height: 1.7;
    list-style: none;
    li {
      padding-left: 1.3rem;
      margin-left: 0.3rem;
      margin-bottom: 1rem;
    }
  }

  ol {
    position: relative;
    counter-reset: my-awesome-counter;
    li {
      counter-increment: my-awesome-counter;
      &:before {
        content: counter(my-awesome-counter) ".";
        color: #06847b;
        position: absolute;
        left: 0;
      }
    }
  }

  ul {
    list-style: none;
    li {
      position: relative;
      &:before {
        position: absolute;
        top: 0.7rem;
        left: 0;
        content: "";
        display: inline-block;
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 50%;
        background-color: #06847b;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  blockquote {
    position: relative;
    font-size: 1.125rem;
    font-style: italic;
    background-color: $turquoise-light;
    border-left: 0.5rem solid #06847b;
    margin: 1.875rem auto;
    padding: 3.75rem 2.5rem 3rem 2.5rem;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 1.5rem;
      width: 1.44rem;
      top: 1.56rem;
      background-image: url("../../../../images/quote-icon.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
