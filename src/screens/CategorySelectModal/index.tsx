import { Feather } from '@expo/vector-icons';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { RectButton } from 'react-native-gesture-handler';

import Button from '../../components/Form/Button';
import { categories } from '../../global/data/categories.data';
import { CategoryInterface } from '../../interfaces/category.interface';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Props {
  category: CategoryInterface | null;
  closeSelectCategory: () => void;
  setCategory: (category: CategoryInterface) => void;
}

export default function CategorySelectModal({
  category,
  closeSelectCategory,
  setCategory,
}: Props) {
  function handleCategorySelect(item: CategoryInterface) {
    setCategory(item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categoria</Text>
      </View>
      <FlatList
        style={styles.categoriesList}
        data={categories}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategorySelect(item)}
            style={[
              styles.category,
              {
                backgroundColor:
                  category?.key === item.key
                    ? theme.colors.secondaryLight
                    : theme.colors.background,
              },
            ]}
          >
            <Feather
              name={item.icon as any}
              size={RFValue(16)}
            />
            <Text style={styles.categoryLabel}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}>
        <Button
          labelButton='Selecionar'
          onPress={closeSelectCategory}
        />
      </View>
    </View>
  );
}
