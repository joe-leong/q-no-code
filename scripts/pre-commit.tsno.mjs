#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file:///Users/joe/projects/encodeStudio/q-no-code/node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch(() => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u8BC4\u4F30\u5B8C\u6210\uFF0C\u521B\u5EFAcommit\u4E2D..."');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy9qb2UvcHJvamVjdHMvZW5jb2RlU3R1ZGlvL3Etbm8tY29kZS9ub2RlX21vZHVsZXMvLnBucG0vdHNub0AyLjAuMC9ub2RlX21vZHVsZXMvdHNuby9kaXN0L2NsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengnXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRPYmplY3QoXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQcm9jZXNzT3V0cHV0LFxuICBtZXRob2Q6ICdsb2cnIHwgJ3dhcm4nIHwgJ2Vycm9yJyA9ICdsb2cnXG4pIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OiR7dmFsdWV9XFxuYClcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgcHJpbnRPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyBcdTUzNTVcdThCQ0RcdTYyRkNcdTUxOTlcdTY4QzBcdTY3RTVcbmF3YWl0ICRgcG5wbSBzcGVsbGNoZWNrYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcblxuLy8gXHU3QzdCXHU1NzhCXHU2OEMwXHU2N0U1ICYmIFx1NjI2N1x1ODg0Q1x1NjY4Mlx1NUI1OFx1NTMzQVx1NEVFM1x1NzgwMVx1NjhDMFx1NjdFNVxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnQ6c3RhZ2VgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuICBwcmludE9iamVjdChvdXQpXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcbiIsICIjIS91c3IvYmluL2VudiB6eFxuXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXG5cbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKVxuXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1OTMxXHU4RDI1XHVGRjBDXHU4QkY3XHU2OEMwXHU2N0U1XHU0RUUzXHU3ODAxJylcbn0pXG5cbmNvbnNvbGUubG9nKCdwcmludGYgXCJcdThCQzRcdTRGMzBcdTVCOENcdTYyMTBcdUZGMENcdTUyMUJcdTVFRkFjb21taXRcdTRFMkQuLi5cIicpXG5cbmF3YWl0ICRgZ2l0IGFkZCAuYFxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQSxTQUFRLGlCQUFpQix5QkFBd0I7QUFBakQsSUFBOERBO0FBQTlEO0FBQUE7QUFBMEQsSUFBSUEsV0FBUSxrQkFBa0Isa0hBQWtIO0FBQUE7QUFBQTs7O0FDQ25NLFNBQVMsWUFDZCxRQUNBLFNBQW1DLE9BQ25DO0FBQ0EsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFDakQsWUFBUSxRQUFRLEdBQUcsT0FBTztBQUFBLENBQVM7QUFBQSxFQUNyQztBQUNGO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFDQSxTQUFTLFNBQVM7QUFEbEI7QUFBQTtBQUFBO0FBRUE7QUFHQSxVQUFNLG1CQUFtQixNQUFNLENBQUMsUUFBdUI7QUFDckQsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUdELFVBQU0sUUFBUSxJQUFJLENBQUMsb0JBQW9CLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQXVCO0FBQ3hGLGtCQUFZLEdBQUc7QUFDZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBQUE7QUFBQTs7O0FDYkQ7QUFFQSxTQUFTLEtBQUFDLFVBQVM7QUFFbEIsUUFBUSxJQUFJLHVEQUFlO0FBRTNCLE1BQU0sdUNBQWtCLE1BQU0sTUFBTTtBQUNsQyxRQUFNLElBQUksTUFBTSxzRkFBZ0I7QUFDbEMsQ0FBQztBQUVELFFBQVEsSUFBSSxvRUFBNEI7QUFFeEMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K
