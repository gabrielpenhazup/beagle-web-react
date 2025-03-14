
/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

const { copyFileSync, mkdirSync } = require('fs')

const filesToCopy = [
  { src: 'package.json', dest: './dist/package.json' },
  { src: 'README.md', dest: './dist/README.md' },
  { src: 'cli/init/boilerplate/app.tsx', dest: './dist/cli/init/boilerplate/app.tsx' },
  { src: 'cli/init/boilerplate/beagle-service.ts', dest: './dist/cli/init/boilerplate/beagle-service.ts' },
  { src: 'cli/init/index.js', dest: './dist/cli/init/index.js' },
]

mkdirSync('./dist/cli/init/boilerplate/', { recursive: true })

filesToCopy.forEach(({ src, dest }) => copyFileSync(src, dest))
