import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Search, Zap, SlidersHorizontal } from 'lucide-react-native';
import { Colors } from '../../constants/theme';
import { DealCard } from '../../components/DealCard';

const CATEGORIES = ['All', 'Fashion', 'Electronics', 'Home', 'Pharmacy', 'Travel', 'Food'];
const TRENDING_BRANDS = ['Myntra', 'Amazon', 'Swiggy', 'Zomato', 'Flipkart', 'Nykaa'];
const ALL_DEALS = [
  { id: 1, brand: 'boAt', description: 'Wireless Earbuds 50% Off', cashback: '12% back', expiresIn: '4 days' },
  { id: 2, brand: 'Samsung', description: 'Smart TV Mega Sale', cashback: '15% back', expiresIn: '2 days' },
  { id: 3, brand: 'Nike', description: 'Running Shoes Flat 40%', cashback: '8% back', expiresIn: '1 day' },
  { id: 4, brand: 'Mamaearth', description: 'Buy 1 Get 1 Free', cashback: '20% back', expiresIn: '5 days' },
  { id: 5, brand: 'Apple', description: 'MacBook Air M2 Offer', cashback: '5% back', expiresIn: '3 days' },
  { id: 6, brand: 'Puma', description: 'Sportswear Clearance', cashback: '10% back', expiresIn: '6 days' },
  { id: 7, brand: 'Ajio', description: 'Festive Wear Sale', cashback: '15% back', expiresIn: '7 days' },
  { id: 8, brand: 'Domino\'s', description: 'Free Pizza on ₹500+', cashback: '50% back', expiresIn: '12 hrs' },
];

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.textSecondary} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search deals, brands..." 
            placeholderTextColor={Colors.textSecondary}
          />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.todayDealsBtn}>
            <Zap size={16} color={Colors.primary} fill={Colors.primary} />
            <Text style={styles.todayDealsText}>Today's Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <SlidersHorizontal size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Categories */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
          {CATEGORIES.map((cat, index) => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.categoryPill, index === 0 && styles.categoryPillActive]}
            >
              <Text style={[styles.categoryPillText, index === 0 && styles.categoryPillTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroMain}>
          <Text style={styles.heroTitle}>Up to 20% cashback on fashion brands</Text>
          <TouchableOpacity style={styles.heroBtn}>
            <Text style={styles.heroBtnText}>Explore Fashion {'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.heroSide}>
          <View style={[styles.sideCard, { marginBottom: 16 }]}>
            <Text style={styles.sideCardTitle}>LIVE DEALS</Text>
            <Text style={styles.sideCardHighlight}>8+</Text>
          </View>
          <View style={styles.sideCard}>
            <Text style={styles.sideCardTitle}>Myntra</Text>
            <Text style={styles.sideCardDesc}>Electronics Sale</Text>
          </View>
        </View>
      </View>

      {/* Trending Now */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <TouchableOpacity><Text style={styles.seeAllText}>See all {'>'}</Text></TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingRow}>
          {TRENDING_BRANDS.map(brand => (
            <View key={brand} style={styles.trendingItem}>
              <View style={styles.trendingBrandCircle}>
                <Text style={styles.trendingBrandText}>{brand[0]}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* All Deals */}
      <View style={styles.sectionHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>All Deals</Text>
          <Text style={styles.dealsCount}>{ALL_DEALS.length} deals</Text>
        </View>
      </View>
      <View style={styles.dealsGrid}>
        {ALL_DEALS.map(deal => (
          <DealCard 
            key={deal.id}
            brand={deal.brand}
            description={deal.description}
            cashback={deal.cashback}
            expiresIn={deal.expiresIn}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    padding: 32,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
    outlineStyle: 'none' as any, // For web focus
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  todayDealsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    height: 44,
    borderRadius: 12,
    gap: 6,
  },
  todayDealsText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
  },
  iconBtn: {
    width: 44,
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  categoriesRow: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  categoryPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 12,
  },
  categoryPillActive: {
    backgroundColor: Colors.text,
    borderColor: Colors.text,
  },
  categoryPillText: {
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  categoryPillTextActive: {
    color: Colors.surface,
  },
  heroSection: {
    flexDirection: 'row',
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  heroMain: {
    flex: 2,
    minWidth: 300,
    backgroundColor: '#0f172a',
    borderRadius: 24,
    padding: 40,
    marginRight: 16,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    maxWidth: '70%',
    marginBottom: 24,
  },
  heroBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  heroBtnText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 16,
  },
  heroSide: {
    flex: 1,
    minWidth: 200,
  },
  sideCard: {
    backgroundColor: Colors.surface,
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    flex: 1,
    justifyContent: 'center',
  },
  sideCardTitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginBottom: 8,
  },
  sideCardHighlight: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
  },
  sideCardDesc: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },
  seeAllText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  dealsCount: {
    marginLeft: 12,
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: 'bold',
  },
  trendingRow: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  trendingItem: {
    marginRight: 24,
    alignItems: 'center',
  },
  trendingBrandCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  trendingBrandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  dealsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10, // Offset for card margins
  },
});
