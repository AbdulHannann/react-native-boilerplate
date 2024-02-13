import React from 'react'
import { AppHeader, AppText } from '../../components'
import { TouchableOpacity, View } from 'react-native'
// import { ImageUri, Schema, Enum } from '../../config'
import { useTranslation } from 'react-i18next'
// import { useForm, useWatch } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { LoginSchemaType } from '@/config/schema'
// import { useLoginUserAPI } from '@/services'
import { LoginProps } from './types'
import { useNavigation } from '@react-navigation/native'
import { gotoDrawerFromAuth } from '@/navigation'

export const Login: React.FC<LoginProps> = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  // const [loading, setLoading] = useState<boolean>(false)
  // const { mutateAsync: loginUser, error, isError, isPending } = useLoginUserAPI()
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<LoginSchemaType>({
  //   resolver: zodResolver(Schema.Login),
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // })

  // const onSubmit = async (data: LoginSchemaType) => {
  //   try {
  //     const result = await loginUser(data)
  //     console.log(result)
  //   } catch (e) {
  //     console.log('error --> ', e)
  //   }
  // }

  return (
    <View>
      <AppHeader title={t('Login')} />
      <TouchableOpacity
        onPress={() => {
          gotoDrawerFromAuth(navigation)
        }}
      >
        <AppText variant="subtitle">Go to Dashboard</AppText>
      </TouchableOpacity>
    </View>
  )
}
