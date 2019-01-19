<h1 align="center">Modern JS BookList App</h1>

BookList app without frameworks

<h2 align="center">Install dependencies</h2>

```
> yarn
```

<h2 align="center">List of available commands</h2>

```
> yarn <command name>
```

<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>clean</code>
      </td>
      <td>
        Removing selected files in public dir
      </td>
    </tr>
    <tr>
      <td>
        <code>pretty</code>
      </td>
      <td>
        Formatting code with Prettier
      </td>
    </tr>
    <tr>
      <td>
        <code>serve</code>
      </td>
      <td>
        Starting development server with Serve
      </td>
    </tr>
    <tr>
      <td>
        <code>start</code>
      </td>
      <td>
        Run parallel scripts: <code>serve</code> and <code>compile:dev:css</code>, <code>compile:dev:js</code> with -w flag
      </td>
    </tr>
    <tr>
      <td>
        <code>build</code>
      </td>
      <td>
        Run sequentially scripts: <code>clean</code>, <code>compile:prod:css</code> and <code>compile:prod:js</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>compile:dev:css</code>
      </td>
      <td>
        Compile all CSS code with PostCSS in dev mode
      </td>
    </tr>
    <tr>
      <td>
        <code>compile:dev:js</code>
      </td>
      <td>
        Compile all JS code with Rollup and Babel in dev mode
      </td>
    </tr>
    <tr>
      <td>
        <code>compile:prod:css</code>
      </td>
      <td>
        All as in <code>compile:dev:css</code> but minify code and add map file
      </td>
    </tr>
    <tr>
      <td>
        <code>compile:prod:js</code>
      </td>
      <td>
        All as in <code>compile:dev:js</code> but minify code and add map file
      </td>
    </tr>
  </tbody>
</table>

<h2 align="center">License</h2>

[MIT](/LICENSE)
