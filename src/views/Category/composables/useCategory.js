import { ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'
export function useCategory() {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    console.log('接口返回:', res)
    categoryData.value = res.result
    console.log('数据已更新，当前categoryData.name:', categoryData.value.name)
  }

  onMounted(() => getCategory())
  onBeforeRouteUpdate((to) => {
      getCategory(to.params.id)
  })
  return {
    categoryData
  }

}