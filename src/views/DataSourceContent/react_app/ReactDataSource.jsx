import '@glideapps/glide-data-grid/dist/index.css'

import { DataEditor, GridCellKind, GridColumnIcon } from '@glideapps/glide-data-grid'
import { useRef, useState, useEffect } from 'react'
const tempDataPool = [
  {
    id: '001',
    name: '合一',
    age: '15',
    isOpen: true,
    hobby: ['football', 'swimming'],
    avatar: ['https://i.pravatar.cc/300?img=3'],
    notes: '**This is a markdown cell**'
  },
  {
    id: '002',
    name: '合二',
    age: '18',
    isOpen: true,
    hobby: ['basketball', 'swimming'],
    avatar: ['https://i.pravatar.cc/300?img=1'],
    notes: 'true'
  },
  {
    id: '003',
    name: '合三',
    age: '23',
    isOpen: false,
    hobby: ['basketball'],
    avatar: ['https://i.pravatar.cc/300?img=4'],
    notes: 'true'
  },
  {
    id: '004',
    name: '合四',
    age: '25',
    isOpen: true,
    hobby: ['football', 'swimming'],
    avatar: ['https://i.pravatar.cc/300?img=5'],
    notes: 'true'
  }
]

const data = new Array(100_0000).fill(0).map((item, index) => {
  const ramdomIndex = Math.floor(Math.random() * 4)
  const ramdomItem = tempDataPool[ramdomIndex]
  return {
    ...ramdomItem,
    id: `00${index}`
  }
})

const columns = [
  { title: 'ID', width: 100, icon: GridColumnIcon.RowID },
  { title: '姓名', width: 100, icon: GridColumnIcon.Text },
  { title: '年龄', width: 100 },
  { title: '状态', width: 50 },
  { title: '爱好', width: 200 },
  { title: '头像', width: 200 },
  { title: '笔记', width: 200 }
]

function getData([col, row]) {
  const person = data[row]
  switch (col) {
    case 0: {
      return {
        kind: GridCellKind.RowID,
        data: person.id,
        allowOverlay: false,
        displayData: person.id
      }
    }

    case 1: {
      return {
        kind: GridCellKind.Text,
        data: person.name,
        allowOverlay: true,
        displayData: person.name,
        hasMenu: true,
        key: 'name'
      }
    }

    case 2: {
      return {
        kind: GridCellKind.Number,
        data: person.age,
        allowOverlay: true,
        displayData: person.age,
        key: 'age'
      }
    }

    case 3: {
      return {
        kind: GridCellKind.Boolean,
        data: person.isOpen,
        allowOverlay: true,
        displayData: person.isOpen,
        key: 'isOpen'
      }
    }

    case 4: {
      return {
        kind: GridCellKind.Bubble,
        data: person.hobby,
        allowOverlay: true,
        displayData: person.hobby,
        key: 'hobby'
      }
    }

    case 5: {
      return {
        kind: GridCellKind.Image,
        data: person.avatar,
        allowOverlay: true,
        displayData: person.avatar
      }
    }

    case 6: {
      return {
        kind: GridCellKind.Markdown,
        data: person.notes,
        allowOverlay: true,
        // displayData: person.notes,
        key: 'notes'
      }
    }

    default: {
      return {}
    }
  }
}

export default function ReactDataSource() {
  const ref = useRef()
  const [editorRect, setEditorRect] = useState({ width: 500, height: 300 })
  const { width, height } = editorRect
  useEffect(() => {
    const calcRect = () => {
      const outerContainerDom = ref.current.parentElement.parentElement
      if (outerContainerDom) {
        const { width, height } = outerContainerDom.getBoundingClientRect()
        setEditorRect({ width: width - 28, height: height - 24 })
      }
    }

    calcRect()

    window.addEventListener('resize', calcRect, false)

    return () => {
      window.removeEventListener('resize', calcRect, false)
    }
  }, [])
  function cellEdit([, row], newData) {
    const { key, data: newState, kind } = newData
    data[row][key] = kind === GridCellKind.Boolean ? newState : newState + ''
  }
  return (
    <div ref={ref}>
      <DataEditor
        width={width}
        height={height}
        columns={columns}
        getCellContent={getData}
        rows={data.length}
        onCellEdited={cellEdit}
      />
      <div id="portal" style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999 }} />
    </div>
  )
}
