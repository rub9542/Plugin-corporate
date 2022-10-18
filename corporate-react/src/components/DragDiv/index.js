import React from 'react'
// import { arrayMoveImmutable } from 'array-move'
import DragIcon from 'components/icons/DragIcon'
import Flex from 'components/Flex'
// import {
//   sortableContainer,
//   sortableElement,
//   sortableHandle,
// } from 'react-sortable-hoc'

import {
  FlexWrap,
  Heading,
  Description,
  ContentFlex,
  MainFlex,
  ActionWrap,
  ButtonDiv,
} from 'components/DragDiv/style'
import EditIcon from 'components/icons/EditIcon'
import DeleteIcon from 'components/icons/DeleteIcon'

const DragDiv = ({
  headingParam = 'name',
  descriptionParam = 'description',
  idParam = 'id',
  sortedItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  setSortedItems,
}) => {
  // const DragHandle = sortableHandle(() => <DragIcon />)

  // const SortableItem = sortableElement(({ value }) => (
  //   <FlexWrap centerVertically spaceBetween>
  //     <ContentFlex gap="10px" centerVertically>
  //       <Flex centerVertically>
  //         <DragHandle />
  //       </Flex>
  //       <ContentFlex column>
  //         <Heading>{value[headingParam]}</Heading>
  //         <Description>{value[descriptionParam]}</Description>
  //       </ContentFlex>
  //     </ContentFlex>
  //     <ActionWrap centerVertically>
  //       <ButtonDiv>
  //         <EditIcon />
  //       </ButtonDiv>
  //       <ButtonDiv>
  //         <DeleteIcon />
  //       </ButtonDiv>
  //     </ActionWrap>
  //   </FlexWrap>
  // ))

  // const SortableContainer = sortableContainer(({ children }) => {
  //   return <MainFlex column>{children}</MainFlex>
  // })

  // const onSortEnd = ({ oldIndex, newIndex }) => {
  //   setSortedItems(items => arrayMoveImmutable(items, oldIndex, newIndex))
  // }

  return (
    <div></div>
    // <SortableContainer useDragHandle>
    //   {/* {sortedItems?.map((value, index) => (
    //     <SortableItem key={`item-${index}`} index={index} value={value} />
    //   ))} */}
    // </SortableContainer>
  )
}

export default DragDiv
